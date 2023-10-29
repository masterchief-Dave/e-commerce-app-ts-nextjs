'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  UserCircleIcon,
  WalletIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/navigation'

import BreadCrumb from '@/components/BreadCrumb'
import { DashboardNavbar } from '@/components/Navbar/dashboardNavbar'
import useMediaQuery from '@/hooks/useMediaQuery'
import { MobileSideBar } from './sidebar'
import Loader from '@/components/Shell/Loader'

type Props = {
  children?: JSX.Element
  user?: User | null
}

type ServerProps = {
  user: User | null
}

export const AccountLayout = ({ children, user }: Props) => {
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false)
  const isAboveMediaQuery = useMediaQuery('(min-width: 900px)')
  const router = useRouter()

  const {data: session, status} = useSession()

  if(status === 'loading') {
    return <Loader />
  }

  if (status === 'unauthenticated') {
    router.push('/auth/login')
    return <Loader />
  }


  return (
    <div className='mx-auto w-full max-w-screen-2xl '>
      <DashboardNavbar
        setShowMobileSidebar={setShowMobileSidebar}
        showMobileSidebar={showMobileSidebar}
      />
      <BreadCrumb />

      {isAboveMediaQuery ? (
        <div className='relative grid grid-cols-12 py-16'>
          <section className='col-start-2 col-end-5'>
            <SideBar />
          </section>

          <section className='col-start-6 col-end-12 min-h-screen'>
            <main className='h-fit rounded-xl border'>
              {children}
            </main>
          </section>
        </div>
      ) : (
        <div className='grid grid-cols-12 py-24'>
          <section className='col-start-2 col-end-12 mx-auto w-full rounded-[1rem] border'>
            {children}
          </section>
          {showMobileSidebar ? (
            <MobileSideBar
              setShowMobileSidebar={setShowMobileSidebar}
              showMobileSidebar={showMobileSidebar}
            />
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  )
}

export const SideBar = () => {
  const router = useRouter()

  const styles = {
    header: `font-bold text-[1.8rem]`,
    active: `text-primary-red-100 text-[1.3rem] font-normal`,
    link: `text-[1.3rem] font-normal`,
  }

  return (
    <div className='sticky top-[10rem] w-full space-y-4 divide-y rounded-[1rem] border '>
      <section className='flex gap-x-8 p-8'>
        <div>
          <UserCircleIcon className='h-8 w-8' />
        </div>
        <ul className='space-y-4'>
          <h2 className={styles.header}>My Profile</h2>
          <li>
            <Link
              href='/account/profile'
              className={
                router.pathname === '/account/profile'
                  ? styles.active
                  : styles.link
              }
            >
              Account information
            </Link>
          </li>

          <li>
            <Link
              href='/account/delivery-address'
              className={
                ['/account/delivery-address', '/account/add-address'].includes(router.pathname)
                  ? styles.active
                  : styles.link
              }
            >
              Delivery address
            </Link>
          </li>
        </ul>
      </section>

      <section className='flex gap-x-8 p-8 py-4'>
        <div>
          <ShoppingBagIcon className='h-8 w-8' />
        </div>
        <ul className='space-y-4'>
          <h2 className={styles.header}>My Orders</h2>
          <li>
            <Link
              href='/account/orders'
              className={
                router.pathname === '/account/orders'
                  ? styles.active
                  : styles.link
              }
            >
              Order History
            </Link>
          </li>
          <li>
            <Link
              href='/account/reviews'
              className={
                router.pathname === '/account/reviews'
                  ? styles.active
                  : styles.link
              }
            >
              My reviews
            </Link>
          </li>
        </ul>
      </section>

      <section className='flex gap-x-8 p-8 py-4'>
        <div>
          <WalletIcon className='h-8 w-8' />
        </div>
        <ul className='space-y-4'>
          <h2 className={styles.header}>My Wallet</h2>
          <li>
            <Link
              href='/account/add-payment'
              className={
                router.pathname === '/account/add-payment'
                  ? styles.active
                  : styles.link
              }
            >
              Add payment method
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className={
                router.pathname === '/account/saved-card'
                  ? styles.active
                  : styles.link
              }
            >
              Saved card
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

