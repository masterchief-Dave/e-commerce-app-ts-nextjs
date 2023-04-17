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
        // console.log(await res.json())

        const { user, role, token, success } = await res.json()
        // console.log({ user }, { role }, { token }, { success })
        // user.role = role

        // create the new user object in this place
        const newUser = {
          user: user.name,
          email: user.email,
          role: user.role,
          image: user.avatar.url,
          token: token,
          success: success,
          password: user.password,
          id: user._id,
        }

        // console.log({ newUser })

        if (res.ok && user) {
          // console.log(res.body)
          return newUser
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log({ user })
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      session.user = token as any
      return session
    },
  },
})
