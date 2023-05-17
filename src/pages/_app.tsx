import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './demos/demo.scss'
import '../components/Dropdown/dropdown.scss'
import '@/styles/main.scss'
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import type { Session } from 'next-auth'

const client = new QueryClient()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <QueryClientProvider client={client}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Toaster />
      </SessionProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
