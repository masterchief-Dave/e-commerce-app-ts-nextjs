import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
// const { cookies } = require('next/headers').headers()
import { apiService } from "@/lib/helpers/apiService"

const secretKey = "secret"
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key)
}
// this some very cool code wil show here
// this is another line of code

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  })
  return payload
}

export async function handleLogin(email: string, password: string) {
  const response = await apiService(`/auth/login`, "POST", {
    email: email,
    password: password,
  })

  if (response.success) {
    const expires = new Date(Date.now() + 60 * 60 * 24 * 1000)
    const session = await encrypt({ user: response?.user, expires })

    cookies().set("session", session, { expires, httpOnly: true })
    return { message: "", status: true }
  } else {
    return { message: "", status: false }
  }
}

export async function getSession() {
  const session = cookies().get("session")?.value
  if (!session) return null
  return await decrypt(session)
}

export const getUser = async () => {
  const response = await apiService("/user")

  // console.log((response.data))
  return response.data
}
