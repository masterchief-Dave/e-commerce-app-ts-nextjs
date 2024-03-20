import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { fetchRefresh } from "./utils/fetchRefresh"

export async function middleware(req: NextRequest) {

  // const response = await fetchRefresh()
  // const data = await response

}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

// '/((?!api|_next/static|_next/image|favicon.ico).*)'

// "/api/products/update-product"
// /api/products/:path*
