import { DashboardNavbar } from '@/components/Navbar/dashboardNavbar'
import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { fetchProducts } from '@/features/fetchProducts'

import { policyData } from '@/globals/policy'
import { descriptionData } from '@/globals/product'
import useMediaQuery from '@/hooks/useMediaQuery'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const Trial = () => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')

  // console.log({ isAboveMediumScreen })
  fetchProducts()
  return (
    <div className=''>
      {/* <ShoppingFixedBag /> */}
      {}
      {/* <VideoContainer /> */}
      <DashboardNavbar />
      <SideBar />
    </div>
  )
}

export default Trial

const SideBar = () => {
  const router = useRouter()

  const styles = {
    list: `py-8`,
    link: `block text-[1.2rem] font-medium`,
    active: `text-primary-red-100 text-[1.2rem] block font-medium`,
  }
  return (
    <div className='absolute top-0 left-0 h-screen max-h-screen w-2/5 bg-[#EFEFEF] py-12 px-12 font-inter'>
      {/* close the sidebar */}
      <div className='mb-16 flex justify-end'>
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white'>
          <XMarkIcon className='h-12 w-12' />
        </div>
      </div>

      <nav>
        <ul className='w-full divide-y divide-primary-white-400'>
          <li className={styles.list}>
            <Link
              href='/account/profile'
              className={
                router.pathname === '/account/profile'
                  ? styles.active
                  : styles.link
              }
            >
              Account Information
            </Link>
          </li>

          <li className={styles.list}>
            <Link
              href='/account/delivery-address'
              className={
                router.pathname === '/account/delivery-address'
                  ? styles.active
                  : styles.link
              }
            >
              Delivery Address
            </Link>
          </li>

          <li className={styles.list}>
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

          <li className={styles.list}>
            <Link
              href='#'
              className={
                router.pathname === '/account/reviews'
                  ? styles.active
                  : styles.link
              }
            >
              Reviews
            </Link>
          </li>

          <li className={styles.list}>
            <Link
              href='/account-add-payment'
              className={
                router.pathname === '/account/add-payment'
                  ? styles.active
                  : styles.link
              }
            >
              Add Payment Method
            </Link>
          </li>

          <li className={styles.list}>
            <Link
              href='#'
              className={
                router.pathname === '/account/saved-card'
                  ? styles.active
                  : styles.link
              }
            >
              Saved Card
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

// const VideoContainer = () => {
//   return (
//     <div className='w-[20rem] rounded-xl border p-2'>
//       <video
//         // src='https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/SnapInsta_285812316_783982779704202_1254703527819543922_n_vkqghh.mp4'
//         className='h-[20rem] w-[20rem] object-cover'
//         autoPlay
//         loop
//         muted
//       >
//         <source src='https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/SnapInsta_285812316_783982779704202_1254703527819543922_n_vkqghh.mp4' />
//       </video>
//     </div>
//   )
// }
