import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { signIn, signOut, useSession, getSession } from 'next-auth/react'
import Image from 'next/image'
import { NextApiRequest } from 'next'
import { Session } from 'next-auth'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useStickyNavbar } from '@/hooks/useStickyNavbar'
import { useCart } from '@/hooks/useCart'

type Props = {
  session: Session | null
  isTop: boolean
  cartItems: Cart[]
}

const styles = {
  navDropdownLink: `inline-block w-full rounded-md px-4 py-4 text-[1rem] hover:rounded-md hover:bg-primary-blue-200 lg:text-[1.4rem]`,
}

export const Navbar = () => {
  const { data: session } = useSession()
  // console.log(session)
  const { isTop } = useStickyNavbar()

  const { cart } = useCart()

  // const photo = session?.user?.photo!
  // console.log(session?.user)

  return (
    <div className=''>
      <div className='block lg:hidden'>
        <MobileNavbar />
      </div>

      <div className='hidden lg:block'>
        <Desktop session={session} isTop={isTop} cartItems={cart} />
      </div>
    </div>
  )
}

const Desktop = ({ session, isTop, cartItems }: Props) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  // when I click outside close the dropdown

  return (
    <nav
      className={`grid grid-cols-12 bg-primary-blue-100 py-4 font-poppins ${
        isTop ? 'fixed top-0 right-0 z-[9999] w-full' : ''
      }`}
    >
      <ul className='col-start-2 col-end-12 mx-auto flex w-full max-w-[144rem] items-center justify-between gap-x-8'>
        <li>
          <h1>
            <Link href='/' className='text-[2rem] font-black text-white'>
              Sage - Warehouse
            </Link>
          </h1>
        </li>
        <li className='lg:w-[30%] xl:w-[40%]'>
          <div className='flex h-[4rem] w-full items-center rounded-sm bg-white hover:ring-2'>
            <input
              type='text'
              placeholder='search'
              className='h-full w-[90%] rounded-md border-0 bg-transparent px-4 text-[1.4rem] outline-0 focus:outline-0'
            />
            <div className='flex h-full w-[10%] cursor-pointer items-center justify-center  '>
              <div className='w-fit rounded-md p-2 transition-all delay-75 hover:bg-primary-blue-300'>
                <MagnifyingGlassIcon className='h-8 w-8 hover:text-white' />
              </div>
            </div>
          </div>
        </li>
        <div className='flex items-center gap-x-4'>
          {session ? (
            <div className='relative h-[4rem] w-[4rem] rounded-full'>
              <Image
                src={session?.user?.image!}
                alt='profile image'
                width={1000}
                height={1000}
                className='h-[4rem] w-[4rem] cursor-pointer rounded-full object-cover'
                onClick={() => setShowDropdown(!showDropdown)}
              />

              {showDropdown && (
                <div className='absolute top-[4.5rem] z-[999] w-[15rem] rounded-xl border bg-[#FFF] py-4 px-2'>
                  <ul className='w-full space-y-1 divide-y'>
                    <li>
                      <Link
                        href='/account/profile'
                        className={styles.navDropdownLink}
                      >
                        {' '}
                        Account{' '}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/account/orders'
                        className={styles.navDropdownLink}
                      >
                        {' '}
                        Orders{' '}
                      </Link>
                    </li>
                    <li>
                      <Link href='/wishlist' className={styles.navDropdownLink}>
                        {' '}
                        Wishlist{' '}
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() =>
                          signOut({
                            callbackUrl: 'http://localhost:3002',
                            redirect: false,
                          })
                        }
                        className={`${styles.navDropdownLink} text-left`}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className='flex items-center gap-x-8'>
              <li>
                {/* <Link href='/auth/login'> */}
                <button
                  className='auth-btn bg-white text-primary-blue-100 transition-all delay-75 hover:bg-primary-blue-300 hover:text-white'
                  onClick={() => signIn()}
                >
                  Login
                </button>
                {/* </Link> */}
              </li>
              <li className='hidden'>
                <Link href='/auth/register'>
                  <button className='auth-btn bg-primary-yellow-100 text-primary-blue-100'>
                    Sign up
                  </button>
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

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false)
  const mobileNavbarRef = useRef<HTMLDivElement | null>(null)
  const barIconRef = useRef<HTMLLIElement | null>(null)

  const styles = {
    list: `p-4 font-medium text-white hover:bg-[#fff]/20 rounded-xl`,
    links: `w-full h-full block`,
    navDropdownLink: `inline-block w-full rounded-md px-4 py-4 text-[1rem] hover:rounded-md hover:bg-primary-blue-200 lg:text-[1.4rem]`,
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
            <Link href='/' className='text-lg font-black text-white'>
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
                    signOut({ callbackUrl: 'http://localhost:3002' })
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
