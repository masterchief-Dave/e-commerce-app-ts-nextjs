import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

interface User {
  avatar: Object
  _id: string
  name: string
  email: string
  password: string
  role: string
  passwordChangedAt: string
  createdAt: string
  __v: number
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials-login',

      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch('http://localhost:3000/api/v1/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        })
        const user = await res.json()

        if (res.ok && user) {
          // console.log(res.body)
          return user
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // console.log({ url, baseUrl })
      if (url.startsWith('/')) {
        return `http://localhost:3000/api/v1/auth/login`
      }

      return url
    },
    async jwt({ token, user }) {
      // console.log({ user })
      return { token, user }
    },
    async session({ session, token, user }) {
      const userSession = { ...session, accessToken: null, userId: '' }
      const tokenData: {
        token: Object
        user: {
          success: boolean
          token: string
          user: User
          iat: Date
          exp: Date
          jti: string
        }
      } = token.token as any

      console.log(tokenData.user.user)

      // session.user

      // console.log(token?.token?.user?.user)

      // userSession['accessToken'] = token
      return session
    },
  },
})
