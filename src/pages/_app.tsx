import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './demo.scss'
import '../components/Dropdown/dropdown.scss'
import '@/styles/main.scss'
import { Toaster } from 'react-hot-toast'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Toaster />
    </div>
  )
}
