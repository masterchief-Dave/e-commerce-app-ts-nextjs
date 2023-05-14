import NextAuth from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string
      image: string
      email: string
      iat: number
      exp: number
      jti: string
      password: string
      picture: string
      role: string
      sub: string
      success: boolean
      token: string
      user: string
    }
  }
}