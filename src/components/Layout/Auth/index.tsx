import Link from 'next/link'
import Image from "next/image"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"

import AuthBg from 'public/assets/img/auth-bg.jpg'

type Props = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
  const router = useRouter()
  const session = useSession()

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/')
    }
  }, [session])

  return (
    <div className="mx-auto w-full max-w-screen-4xl max-h-screen">
      <main className="grid grid-cols-12">
        <section className="col-start-1 col-end-7 relative auth_bg_overlay">
          <Image
            src={AuthBg}
            alt="logo"
            className="object-cover max-h-screen"
          />
          <div className="absolute top-10 left-10 z-10">
            <header className="">
              <Link href='/' className='block font-bold text-white text-[2rem]'>Sage-Warehouse</Link>
            </header>
          </div>
        </section>
        <section className="col-start-7 col-end-13 px-12 flex items-center h-screen">
          {children}
        </section>
      </main>
    </div>
  )
}

export default AuthLayout
