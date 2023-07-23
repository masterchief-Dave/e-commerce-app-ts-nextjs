import { connectToMongoDB } from '@/lib/mongodb'
import { User } from '@/models/user'
import { compare } from 'bcryptjs'
import NextAuth, { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

// interface User {
//   avatar: {
//     public_id: string
//     url: string
//   }
//   _id: string
//   name: string
//   email: string
//   password: string
//   role: string
//   passwordChangedAt: string
//   createdAt: string
//   __v: number
// }

const options: NextAuthOptions = {
  providers: [CredentialsProvider({
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
  })],
  pages: {
    newUser: '/auth/register',
    signIn: '/auth/login'
  },
  session: {
    strategy: 'jwt'
  },
  callbacks: {
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
      console.log({ token })
      const user = token.user as IUser

      // session.user = user
      session.expires = ''
      // session.token = token
      session.role = user.role
      session.photo = user.avatar.url
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

export default NextAuth(options)