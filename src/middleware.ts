import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { decode } from 'next-auth/jwt'
import { getServerSession } from "next-auth"

import { User } from "./models/user"
import { connectToMongoDB } from "./lib/mongodb"
import { options } from "./pages/api/auth/[...nextauth]"
import { JWT_SECRET } from "./utils/config"

export async function middleware(req: NextRequest) {
  // check if a user is an amdin or not
  console.log('the code is in the middleware before entering the update-product endpoint')
  // await connectToMongoDB()
  const token = await getToken({ req })

  // const user = jwt.verify(token?.accessToken as string, JWT_SECRET as string)
  // const session = await getServerSession(ctx, authOptions)

  // decode the accessToken

  // const session = await getServerSession(options)
  // console.log({ session })

  // @ts-ignore
  // const user = await User.findOne({ email: token?.email })
  // console.log({ user })
}

export const config = {
  matcher: ["/api/products/update-product/1/:path*"]
}

// "/api/products/update-product"
// /api/products/:path*
