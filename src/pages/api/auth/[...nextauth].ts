import { compare } from 'bcryptjs'
import NextAuth, { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

import { connectToMongoDB } from '@/lib/mongodb'
import { User } from '@/models/user'
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@/utils/config'


const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
    id: 'credentials',
    name: 'credentials-login',
    credentials: {
      email: { label: 'Email', type: 'text' },
      password: { label: 'Password', type: 'password' }
    },
    async authorize(credentials, req) {
      await connectToMongoDB().catch(err => { throw new Error(err) })

      // @ts-ignore
      const user = await User.findOne({
        email: credentials?.email
      }).select('+password')
      if (!user) {
        throw new Error('Invalid credentials')
      }

      const isPasswordCorrect = await compare(credentials?.password!, user.password)
      if (!isPasswordCorrect) {
        throw new Error('Invalid credentials')
      }

      return user
    },
    }),
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
      // callbackUrl: 'http://localhost:3002/api/auth/callback/google'
    })
  ],
  pages: {
    newUser: '/auth/register',
    signIn: '/auth/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24
  },
  callbacks: {
    async signIn({ user, account, profile }) {

      if (account?.provider === 'credentials') {
        if (user) return true
      }

      await connectToMongoDB()
      // @ts-ignore
      const userExists = await User.findOne({ email: profile?.email })

      if (!userExists) {
        // @ts-ignore
        await User.create({
          name: profile?.name,
          email: profile?.email,
          googleId: profile?.sub,
          password: profile?.sub,
          avatar: profile?.image
        })
      }

      return true
    },
    jwt: async ({ token, user, session, account, profile }) => {
      user && (token.user = user)

      if (account) {
        token.accessToken = account!?.access_token
        // token.id = profile.id
      }

      return token
    },
    session: async ({ session, token }) => {
      // console.log({ session, token })
      // console.log({ token })
      const user = token.user as IUser

      // session.user = user
      // session.expires = ''
      // session.token = token
      session.role = user?.role || 'user'
      session.photo = user?.avatar ? user.avatar : token?.image as string
      // session.expires = 30 * 1000
      return session
    }
  }
}

/**
 * address: string;
    image: string;
    email: string;
    iat: number;
    exp: number;
    jti: string;
    password: string;
    picture: string;
    role: string;
    sub: string;
    success: boolean;
    token: string;
    user: string;
 */

// export default NextAuth(options)
const authHandler = NextAuth(options)
export default async function handler(...params: any[]) {
  await authHandler(...params)
}