import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

interface User {
  avatar: {
    public_id: string
    url: string
  }
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
    // google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials-login',

      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch('http://localhost:8000/api/v1/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { 'Content-Type': 'application/json' },
        })
        const user = await res.json()
        // console.log(user)

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
        return `http://localhost:8000/api/v1/auth/login`
      }

      return url
    },
    // async jwt({ token, user }) {
    //   // console.log({ user })
    //   // return { token, user }
    // },
    // async session({ session, token, user }) {
    //   const userSession = {
    //     ...session,
    //     accessToken: '',
    //     userId: '',
    //     email: '',
    //     name: '',
    //     photo: '',
    //     role: '',
    //     success: false,
    //     iat: '',
    //     exp: '',
    //   }

    //   const tokenData: {
    //     token: string
    //     success: boolean
    //     user: {
    //       success: boolean
    //       token: string
    //       user: User
    //     }
    //     iat: string
    //     exp: string
    //     jti: string
    //   } = token.token as any

    //   // console.log(tokenData.user.user)

    //   // console.log({ tokenData })

    //   userSession.email = tokenData.user.user.email
    //   userSession.name = tokenData.user.user.name
    //   userSession.photo = tokenData.user.user.avatar.url
    //   userSession.role = tokenData.user.user.role
    //   userSession.accessToken = tokenData.user.token
    //   userSession.success = tokenData.user.success
    //   userSession.iat = tokenData.iat
    //   userSession.exp = tokenData.exp

    //   // session.user = tokenData.user.user.name
    //   // session.email = tokenData.user.user.email

    //   // console.log(token?.token?.user?.user)

    //   // userSession['accessToken'] = token
    //   // console.log({ userSession })
    //   return userSession
    // },
  },
})

/**
 * session {
 * name: string
 * photo: string
 * }
 */
