import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
// import { decode } from 'next-auth/jwt'
// import { getServerSession } from "next-auth"

// import { User } from "./models/user"
// import { connectToMongoDB } from "./lib/mongodb"
// import { options } from "./pages/api/auth/[...nextauth]"
// import { JWT_SECRET } from "./utils/config"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  console.log(token)

  if (!token?.user) {
    return NextResponse.rewrite(new URL('/auth/login', req.url))
  }
}

export const config = {
  matcher: ["/account/:path*"]
}

// "/api/products/update-product"
// /api/products/:path*
