import { Types } from 'mongoose'
import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User extends DefaultUser {
    role: string
    avatar: string
  }

  interface Session {
    // user?: User
    _id: Types.ObjectId
    role: string
    token: string
    photo: string
    googleId: string
  }
}

// declare module 'next-auth/jwt' {
//   interface JWT {
//     /** The user's role. */
//     role?: string
//   }
// }
