import { SideBar } from '@/components/Layout/Account'
import { ShoppingFixedBag } from '@/components/ShoppingBag'

import { policyData } from '@/globals/policy'
import { descriptionData } from '@/globals/product'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'

const Trial = () => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')

  // console.log({ isAboveMediumScreen })

  return (
    <div className='p-24'>
      <ShoppingFixedBag />

      <MobileNavbar />
    </div>
  )
}

export default Trial

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false)

  const styles = {
    list: `p-4 font-medium text-white hover:bg-[#fff]/20`,
  }

  return (
    <nav className='bg-primary-blue-100 py-4'>
      <ul className='relative flex items-center justify-between px-24'>
        <li>
          <h1>
            <Link href='/' className='text-lg font-black text-white'>
              Sage-Warehouse
            </Link>
          </h1>
        </li>

        <li className=''>
          <Bars3Icon className='h-10 w-10 text-white' />
        </li>
        <div className='absolute top-20 w-[80%] rounded-md bg-[#000] p-10 text-white'>
          <ul>
            <li className={styles.list}>
              <Link href='/profile'>Profile</Link>
            </li>
            <li>
              <input
                type='text'
                placeholder='Search'
                className={`block w-full rounded-md p-4 font-medium text-black`}
              />
            </li>
            <li className={styles.list}>
              <Link href='/cart'>Cart</Link>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  )
}
