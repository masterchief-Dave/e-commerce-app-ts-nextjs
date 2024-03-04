import Link from 'next/link'

import { Bars3Icon } from '@heroicons/react/24/outline'
import { useStickyNavbar } from '@/hooks/useStickyNavbar'
import useMediaQuery from '@/hooks/useMediaQuery'
import useAuth from '@/hooks/useAuth'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { UserAccountDropdown } from '../Dropdown/Account'

type Props = {
  showMobileSidebar: boolean
  setShowMobileSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export const DashboardNavbar = ({
  setShowMobileSidebar,
  showMobileSidebar,
}: Props) => {
  const { isTop } = useStickyNavbar()
  const session = useSession()

  const isAboveMediaQuery = useMediaQuery('(min-width: 900px)')

  const { user } = useAuth()

  return (
    <nav
      className={`grid w-full grid-cols-12 bg-primary-blue-100 py-4 `}
    >
      <ul className='col-start-2 col-end-12 mx-auto flex w-full max-w-[144rem] items-center justify-between gap-x-8'>
        <li>
          <Link href='/'>
            <h1 className='text-[2rem] font-bold text-white'>
              Sage-Warehouse
            </h1>
          </Link>
        </li>

        {isAboveMediaQuery ? (
          <div className='flex items-center gap-x-4'>
            <p className='text-[1.1rem] font-semibold text-white lg:text-[1.6rem]'>
              Aloha 👋,{' '}
              {/* <span className='text-[1.5rem] lg:text-[2rem]'>{user?.name}</span> */}
            </p>
            <UserAccountDropdown photo={user?.photo} alt={user?.name + 'photo'} fallback="e.k" />
            {/* <div className='h-16 w-16 rounded-full'>
              <Image src={session?.data?.user?.image!} alt='photo' width={1000} height={1000} className='rounded-full' />
            </div> */}
          </div>
        ) : (
          <li
            className='flex cursor-pointer items-center gap-x-8 text-white'
            onClick={() => setShowMobileSidebar(true)}
          >
            <Bars3Icon className='h-12 w-12' />
          </li>
        )}
      </ul>
    </nav>
  )
}

// 900px

/**
 *   <p className='text-[1.1rem] font-semibold lg:text-[1.6rem]'>
            Welcome, <span className='text-[1.5rem] lg:text-[2rem]'>David</span>
      </p>
 */
