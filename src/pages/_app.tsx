import { Toaster } from "@/components/ui/toaster"
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import type { Session } from 'next-auth'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/globals.css'
import './demos/demo.scss'
import '../components/Dropdown/dropdown.scss'
import '@/styles/main.scss'
import { store } from '@/app/store'
import { useEffect } from "react"
import axios from "axios"
import useRefreshToken from "@/lib/hooks/useRefreshToken"
import useAuth from "@/lib/hooks/useAuth"
import SWRProvider from "@/SWRProvider"

export default function App({
  Component,
  pageProps: { loading, session, ...pageProps },
}: AppProps<{ session: Session, loading: boolean }>) {
  const refreshToken = useRefreshToken()
  const { user } = useAuth()

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refreshToken()
      } catch (err) {
        console.log(err)
      }
    }

    !user?.token && verifyRefreshToken()
  }, [])

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ChakraProvider>
          <SWRProvider>
            <div className='font-rubik max-w-[2560px] mx-auto'>
              <Component {...pageProps} />
              <Toaster />
            </div>
          </SWRProvider>
        </ChakraProvider>
      </SessionProvider>
    </Provider>
  )
}
