import { Toaster } from "@/components/ui/toaster"
import { ChakraProvider } from "@chakra-ui/react"
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
import useRefreshToken from "@/lib/hooks/useRefreshToken"
import useAuth from "@/lib/hooks/useAuth"
import SWRProvider from "@/SWRProvider"
import Spinner from "@/components/molecules/spinner"
import { useRouter } from "next/router"
import "@smastrom/react-rating/style.css"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import ErrorBoundary from "./error"
import { errorLogger } from "@/lib/utils/logger"
import useUserStore from "@/lib/store/user.store"
import Chat from "@/components/organisms/chat"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  const refreshToken = useRefreshToken()
  const { setUserLoading } = useUserStore((state) => state)
  const { user } = useAuth()
  const staticPaths = [
    "/legal/terms-and-condition",
    "/auth/login",
    "/auth/register",
    "/",
  ]
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(
    staticPaths.includes(router.asPath) ? false : true
  )
  const client = new QueryClient()

  useEffect(() => {
    let isMounted = true
    const verifyRefreshToken = async () => {
      try {
        await refreshToken()
      } catch (err) {
        errorLogger({ url: router.asPath, message: "", err: err })
        setUserLoading(false)
        setIsLoading(false)
      } finally {
        setUserLoading(false)
        isMounted && setIsLoading(false)
      }
    }

    !user?.token ? verifyRefreshToken() : setIsLoading(false)

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <QueryClientProvider client={client}>
      <SessionProvider session={session}>
        <ChakraProvider>
          <SWRProvider>
            <main className={`font-rubik max-w-[2560px] mx-auto`}>
              {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                  <Spinner className="h-[40px] w-[40px]" />
                </div>
              ) : (
                <ErrorBoundary>
                  <div className={`antialiased`}>
                    <Component {...pageProps} />
                    <Toaster />
                    {/* <Chat /> */}
                  </div>
                </ErrorBoundary>
              )}
            </main>
          </SWRProvider>
        </ChakraProvider>
      </SessionProvider>
    </QueryClientProvider>
  )
}
