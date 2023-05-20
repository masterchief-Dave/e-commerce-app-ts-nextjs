import { SideBar } from '@/components/Layout/Account'
import { DashboardNavbar } from '@/components/Navbar/dashboardNavbar'
import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { fetchProducts } from '@/features/fetchProducts'

import { policyData } from '@/globals/policy'
import { descriptionData } from '@/globals/product'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const Trial = () => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')

  // console.log({ isAboveMediumScreen })
  fetchProducts()
  return (
    <div className='p-24'>
      <ShoppingFixedBag />
      {}
      {/* <VideoContainer /> */}
      <DashboardNavbar />
    </div>
  )
}

export default Trial

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
