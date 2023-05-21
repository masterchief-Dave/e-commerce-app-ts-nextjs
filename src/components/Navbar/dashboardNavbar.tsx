import Link from 'next/link'
import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useStickyNavbar } from '@/hooks/useStickyNavbar'
import useMediaQuery from '@/hooks/useMediaQuery'

type Props = {}

export const DashboardNavbar = () => {
  const { isTop } = useStickyNavbar()
  // console.log(data)
  const isAboveMediaQuery = useMediaQuery('(min-width: 900px)')

  return (
    <nav
      className={`grid grid-cols-12 bg-primary-blue-100 py-4 font-poppins ${
        isTop ? 'fixed top-0 right-0 z-[9999] w-full' : ''
      }`}
    >
      <ul className='col-start-2 col-end-12 mx-auto flex w-full max-w-[144rem] items-center justify-between gap-x-8'>
        <li>
          <Link href='#'>
            <h1 className='text-[2rem] font-black text-white'>
              Sage-Warehouse
            </h1>
          </Link>
        </li>

        {isAboveMediaQuery ? (
          <p className='text-[1.1rem] font-semibold text-white lg:text-[1.4rem]'>
            Welcome, <span className='text-[1.5rem] lg:text-[2rem]'>David</span>
          </p>
        ) : (
          <li className='flex items-center gap-x-8 text-white'>
            <Bars3Icon className='h-12 w-12' />
          </li>
        )}
      </ul>
    </nav>
  )
}

// 900px

/**
 *   <p className='text-[1.1rem] font-semibold lg:text-[1.4rem]'>
            Welcome, <span className='text-[1.5rem] lg:text-[2rem]'>David</span>
      </p>
 */
