import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from '@/components/Navbar'
import {
  UserCircleIcon,
  WalletIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = {
  children: JSX.Element
}

export const AccountLayout = ({ children }: Props) => {
  return (
    <div className='mx-auto w-full max-w-screen-2xl font-matter'>
      <Navbar />
      <BreadCrumb />
      <div className='grid grid-cols-12 py-16'>
        <section className='sticky top-[10rem] col-start-2 col-end-5'>
          <SideBar />
        </section>
        <section className='col-start-6 col-end-12 rounded-[1rem] border'>
          {children}
        </section>
      </div>
    </div>
  )
}

export const SideBar = () => {
  const styles = {
    header: `font-black text-[1.8rem]`,
  }

  return (
    <div className='w-full space-y-4 divide-y rounded-[1rem] border font-matter'>
      <section className='flex gap-x-8 p-8'>
        <div>
          <UserCircleIcon className='h-8 w-8' />
        </div>
        <ul className='space-y-4'>
          <h2 className={styles.header}>My Profile</h2>
          <li>
            <Link href='/account/profile'>Account information</Link>
          </li>

          <li>
            <Link href='/account/delivery-address'>Delivery address</Link>
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
            <Link href='/account/orders'>Order History</Link>
          </li>
          <li>My reviews</li>
        </ul>
      </section>

      <section className='flex gap-x-8 p-8 py-4'>
        <div>
          <WalletIcon className='h-8 w-8' />
        </div>
        <ul className='space-y-4'>
          <h2 className={styles.header}>My Wallet</h2>
          <li>
            <Link href='#'>Add payment method</Link>
          </li>
          <li>
            <Link href='#'>Saved card</Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

// my profile - account information, delivery address

// my orders - order history, my reviews

// my wallet - add card, view saved card
