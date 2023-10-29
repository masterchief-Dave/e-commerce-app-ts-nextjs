'use client'
import { useEffect, useState, useRef, MouseEvent, FormEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useSession, signOut } from 'next-auth/react'
import { Session } from 'next-auth'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'

import { useStickyNavbar } from '@/hooks/useStickyNavbar'
import { useCart } from '@/hooks/useCart'
import { useAuth } from '@/hooks/useAuth'
import { useLogout } from '@/hooks/useLogout'
import { UserAccountDropdown } from '../Dropdown/Account'

type Props = {
  session: UserLoginSession | null
  isTop: boolean
  cartItems: Cart[]
  handleSignOut: () => void
  isLoggedIn: boolean
  user: UserSession | null
  data: Session | null
  // i am not using these states any more i am using formik to validate and manage the state of the input for searching
  searchTerm?: string
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>
}

interface Search {
  productName: string
}

type MobileProps = Omit<Props, 'isTop'>


export const Navbar = () => {
  const { handleLogout } = useLogout()
  const { isTop } = useStickyNavbar()
  const { data } = useSession()

  const { isLoggedIn, user } = useAuth()
  // console.log('user session data', { data })

  const { cart } = useCart()

  return (
    <div className=''>
      <div className='block lg:hidden'>
        <MobileNavbar
          handleSignOut={handleLogout}
          session={user}
          data={data}
          cartItems={cart}
          isLoggedIn={isLoggedIn}
          user={user}

        />
      </div>

      <div className='hidden lg:block'>
        <Desktop
          session={user}
          isTop={isTop}
          cartItems={cart}
          handleSignOut={handleLogout}
          isLoggedIn={isLoggedIn}
          user={user}
          data={data}
        />
      </div>
    </div>
  )
}



const Desktop = ({ session, isTop, cartItems, handleSignOut, isLoggedIn, user, data }: Props) => {
  const router = useRouter()

  const formik = useFormik<Search>({
    initialValues: {
      productName: ''
    },
    validationSchema: Yup.object({
      productName: Yup.string().min(1, 'Search string must be more at least one word')
    }),
    onSubmit: (values) => {
      onSubmit(values)
    }
  })

  // when I click outside close the dropdown
  const onSubmit = ({ productName }: Search) => {
    console.log(productName)
    // i want to change to the product search page and then the product search should make use of this data to populate the page
    router.push(`/search/${productName}`)
  }

  return ( 
    <nav
      className={`grid grid-cols-12 bg-primary-blue-100 py-4  ${
        isTop ? 'fixed top-0 right-0 z-[9999] w-full' : ''
      }`}
    >
      <ul className='col-start-2 col-end-12 mx-auto flex w-full items-center justify-between gap-x-8'>
        <li>
          <h1>
            <Link href='/' className='text-[2rem] font-bold text-white'>
              Sage - Warehouse
            </Link>
          </h1>
        </li>
        <li className='lg:w-[30%] xl:w-[40%]'>
          <form className='flex h-[4rem] w-full items-center rounded-sm bg-white hover:ring-2' onSubmit={formik.handleSubmit}>
            <input
              type='text'
              placeholder='search'
              className='h-full w-[90%] rounded-lg border-0 bg-transparent px-4 text-[1.6rem] outline-0 focus:outline-0'
              name='productName'
              value={formik.values.productName}
              onChange={formik.handleChange}
            />
            <div className='flex h-full w-[10%] cursor-pointer items-center justify-center  '>
              <button type='submit' className='w-fit rounded-md p-2 transition-all delay-75 hover:bg-primary-blue-300'>
                <MagnifyingGlassIcon className='h-8 w-8 hover:text-white' />
              </button>
            </div>
          </form>
        </li>
        <div className='flex items-center gap-x-4'>
          {data?.user ? (
            <UserAccountDropdown />
          ) : (
            <div className='flex items-center gap-x-8'>
              <li>
                  <Link href='/auth/login' className='auth-btn bg-white text-primary-blue-100 transition-all delay-75 hover:bg-primary-blue-300 hover:text-white'>
                    Login
                  </Link>
              </li>
              <li className='hidden'>
                  <Link href='/auth/register' className='auth-btn bg-primary-yellow-100 text-primary-blue-100'>
                    Sign up
                </Link>
              </li>
            </div>
          )}

          <li>
            <Link href='/cart' className='relative'>
              <ShoppingBagIcon className='h-12 w-12 text-white' />
              <span className='absolute top-0 left-[15px] flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-primary-yellow-200 text-white'>
                {cartItems.length}
              </span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

const MobileNavbar = ({ handleSignOut, cartItems }: MobileProps) => {
  const [showMenu, setShowMenu] = useState<Boolean>(false)
  const mobileNavbarRef = useRef<HTMLDivElement | null>(null)
  const barIconRef = useRef<HTMLLIElement | null>(null)

  const styles = {
    list: `p-4 font-medium text-white hover:bg-[#fff]/20 rounded-xl`,
    links: `w-full h-full block`,
    navDropdownLink: `inline-block w-full rounded-md px-4 py-4 text-[1rem] hover:rounded-md hover:bg-primary-blue-200 lg:text-[1.6rem]`,
  }

  useEffect(() => {
    const handler = (e: any) => {
      // check if the mousedown occurs in the barIcon
      if (barIconRef.current) {
        if (barIconRef.current.contains(e.target)) {
          return null
        }
      }

      if (
        mobileNavbarRef.current !== undefined &&
        mobileNavbarRef.current !== null
      ) {
        if (!mobileNavbarRef?.current!.contains(e.target)) {
          setShowMenu(false)
        }
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })
  // handle the case for click outside of the opened menu or when esc key is pressed on the keyboard

  return (
    <nav className='relative z-[999] bg-primary-blue-100 py-4'>
      <ul className='relative flex items-center justify-between px-24'>
        <li>
          <h1>
            <Link href='/' className='text-lg font-bold text-white'>
              Sage-Warehouse
            </Link>
          </h1>
        </li>

        <li
          className='cursor-pointer'
          onClick={() => setShowMenu(!showMenu)}
          ref={barIconRef}
        >
          <Bars3Icon className='h-10 w-10 text-white' />
        </li>

        {showMenu && (
          <div
            className='absolute top-16 left-[10%] mx-auto w-[80%] rounded-xl bg-[#000] p-10 text-white'
            ref={mobileNavbarRef}
          >
            <ul className='space-y-4'>
              <li className={styles.list}>
                <Link href='/' className={styles.links}>
                  Home
                </Link>
              </li>
              <li className={styles.list}>
                <Link href='/auth/login' className={styles.links}>
                  Login
                </Link>
              </li>
              <li className={styles.list}>
                <Link href='/cart' className={styles.links}>
                  Cart
                </Link>
              </li>
              <li>
                <input
                  type='text'
                  placeholder='Search'
                  className={`block w-full rounded-md p-4 font-medium text-black`}
                />
              </li>
              <li>
                <button
                  onClick={() =>
                    signOut()
                    // handleSignOut()
                  }
                  className={`${styles.navDropdownLink} text-left`}
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        )}
      </ul>
    </nav>
  )
}
