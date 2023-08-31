import Link from 'next/link'
import { useRouter } from 'next/router'

import { Navbar } from '../Navbar'

type Props = {
  children: JSX.Element
}

export const LegalLayout = ({ children }: Props) => {
  return (
    <div className='Legal mx-auto w-full max-w-screen-2xl font-jost'>
      <Navbar />
      <header className='Legal_Header'>
        <section className='flex h-full w-full items-center'>
          <h3 className='mt-[-14.5rem] pl-[14.5rem] text-[3rem] font-bold'>
            Legal
          </h3>
        </section>
      </header>

      <main className='grid grid-cols-12 py-20'>
        <section className='col-start-2 col-end-4'>
          <SideNav />
        </section>
        <section className='col-start-5 col-end-12 font-matter text-[1.4rem]'>
          {children}
        </section>
      </main>
    </div>
  )
}

const SideNav = () => {
  const router = useRouter()

  return (
    <aside className='Legal Legal_Sidebar h-[20rem] font-matter'>
      <div>
        <h3 className='mb-[3rem] text-[2rem] text-[#222]'>ON THIS PAGE</h3>
        <nav className='flex flex-col gap-x-[1rem]'>
          <Link
            href='/legal/terms-and-condition'
            className={`${
              router.pathname === '/legal/terms-and-condition'
                ? 'Legal_active'
                : ''
            } link`}
          >
            Terms and condition
          </Link>

          <Link
            href='/legal/privacy-policy'
            className={`${
              router.pathname === '/legal/privacy-policy' ? 'Legal_active' : ''
            } link`}
          >
            Privacy policy
          </Link>
        </nav>
      </div>
    </aside>
  )
}
