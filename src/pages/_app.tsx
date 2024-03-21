import { Toaster } from "@/components/ui/toaster"
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import type { Session } from "next-auth"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "@/styles/globals.css"
import "./demos/demo.scss"
import "../components/Dropdown/dropdown.scss"
import "@/styles/main.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import useRefreshToken from "@/lib/hooks/useRefreshToken"
import useAuth from "@/lib/hooks/useAuth"
import SWRProvider from "@/SWRProvider"
import Spinner from "@/components/molecules/spinner"
import { useRouter } from "next/router"
import "@smastrom/react-rating/style.css"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const refreshToken = useRefreshToken()
  const { user } = useAuth()
  const staticPaths = [
    "/legal/terms-and-condition",
    "/auth/login",
    "/auth/register",
  ]
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(
    staticPaths.includes(router.asPath) ? false : true
  )

  useEffect(() => {
    let isMounted = true
    const verifyRefreshToken = async () => {
      try {
        await refreshToken()
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    !user?.token ? verifyRefreshToken() : setIsLoading(false)

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <SWRProvider>
          <div className="font-rubik max-w-[2560px] mx-auto">
            {isLoading ? (
              <div className="flex items-center justify-center h-screen">
                <Spinner className="h-[40px] w-[40px]" />
              </div>
            ) : (
              <>
                <Component {...pageProps} />
                <Toaster />
              </>
            )}
            {/* <>
              <Component {...pageProps} />
              <Toaster />
            </> */}
          </div>
        </SWRProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}
