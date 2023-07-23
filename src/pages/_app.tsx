import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './demos/demo.scss'
import '../components/Dropdown/dropdown.scss'
import '@/styles/main.scss'
import { Toaster } from 'react-hot-toast'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'
import { store } from '@/app/store'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ChakraProvider>
          <Component {...pageProps} />
          <Toaster />
        </ChakraProvider>
      </SessionProvider> 
    </Provider>
  )
}
