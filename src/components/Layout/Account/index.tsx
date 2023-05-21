import Link from 'next/link'
import { useRouter } from 'next/router'
import BreadCrumb from '@/components/BreadCrumb'
import { DashboardNavbar } from '@/components/Navbar/dashboardNavbar'
import {
  UserCircleIcon,
  WalletIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {
  children: JSX.Element
}

export const AccountLayout = ({ children }: Props) => {
  // console.log(data)
  const isAboveMediaQuery = useMediaQuery('(min-width: 900px)')

  return (
    <div className='mx-auto w-full max-w-screen-2xl font-inter'>
      <DashboardNavbar />
      <BreadCrumb />

      {isAboveMediaQuery ? (
        <div className='relative grid grid-cols-12 py-16'>
          <section className='col-start-2 col-end-5'>
            <SideBar />
          </section>

          <section className='col-start-6 col-end-12 rounded-[1rem] border'>
            {children}
          </section>
        </div>
      ) : (
        <div className='relative grid grid-cols-12 py-24'>
          <section className='col-start-2 col-end-12 mx-auto w-full rounded-[1rem] border'>
            {children}
          </section>
        </div>
      )}
    </div>
  )
}

export const SideBar = () => {
  const router = useRouter()

  const styles = {
    header: `font-black text-[1.8rem]`,
    active: `text-primary-red-100 text-[1.3rem] font-normal`,
    link: `text-[1.3rem] font-normal`,
  }

  return (
    <div className='sticky top-[10rem] w-full space-y-4 divide-y rounded-[1rem] border font-inter'>
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
                router.pathname === '/account/delivery-address'
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

const MobileSidebar = () => {
  return <div>some code</div>
}

/**
 *   <p className='text-[1.1rem] font-semibold lg:text-[1.4rem]'>
            Welcome, <span className='text-[1.5rem] lg:text-[2rem]'>David</span>
          </p>
 */

// when the screen is below 900 px show the hamburger icon
// when the hamburger icon is clicked then the sidebar for dashboard should show
// when the screen is above 900px then the hamburger icon shhould not show
