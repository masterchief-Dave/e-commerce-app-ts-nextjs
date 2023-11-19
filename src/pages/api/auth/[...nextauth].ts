import { compare } from 'bcryptjs'
import NextAuth, { NextAuthOptions } from 'next-auth'
import { Types } from 'mongoose'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

import { connectToMongoDB } from '@/lib/mongodb'
import { User } from '@/models/user'
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '@/utils/config'


export const options: NextAuthOptions = {
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
    maxAge: 60 * 60 * 24,
  },
  secret: 'MY_NAME_IS_DAVID_AND_THIS_IS_IS_14227273___NIIWIWJames&Johnarebrother_never_the_same_security_not-test',
  
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
        token.accessToken = account && account.access_token
      }

      return token
    },
    session: async ({ session, token }) => {
      // console.log({ session, token })
      const user = token.user as IUser
      let db

      try {
        // @ts-ignore
        db = await User.findOne({ email: token.email })
        // console.log({ db })
      } catch (err) {
        console.log('error from here, in the next-auth, no user found')
        console.log(err)
      }

      // console.log({ token })

      // session.user = user
      // session.expires = ''
      // session.token = token
      // session.token = token as JWT
      session.role = user?.role || 'user'
      session.photo = user?.avatar ? user.avatar : token?.image as string
      session.googleId = user.id as string
      session._id = db._id
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