import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

import { signIn, signOut, useSession, getSession } from 'next-auth/react'
import Image from 'next/image'
import { NextApiRequest } from 'next'
import { Session } from 'next-auth'

type Props = {
  session: Session | null
  isTop: boolean
}

export const Navbar = (props: Props) => {
  const { data: session } = useSession()
  console.log(session)

  // const photo = session?.user?.photo!
  // console.log(session?.user)

  const [scroll, setScroll] = useState<number | null>(null)
  const [isTop, setIsTop] = useState<boolean>(false)

  useEffect(() => {
    setScroll(window.scrollY)
  }, [])

  const handleNavbar = () => {
    if (window.scrollY > 0) {
      return setIsTop(true)
    } else {
      return setIsTop(false)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', handleNavbar)

    return () => {
      document.removeEventListener('scroll', handleNavbar)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll])

  return (
    <div className=''>
      <div className='block lg:hidden'>
        <MobileNavbar />
      </div>

      <div className='hidden lg:block'>
        <Desktop session={session} isTop={isTop} />
      </div>
    </div>
  )
}

const Desktop = ({ session, isTop }: Props) => {
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
        <li className='w-[40%]'>
          <div className='flex h-[4rem] w-full items-center rounded-sm bg-white hover:ring-2'>
            <input
              type='text'
              placeholder='search'
              className='h-full w-[90%] border-0 bg-transparent px-4 text-[1.4rem] outline-0  focus:outline-0'
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
            <div className='h-[4rem] w-[4rem] rounded-full'>
              <Image
                src={session?.user?.image!}
                alt='profile image'
                width={1000}
                height={1000}
                className='h-[4rem] w-[4rem] rounded-full'
              />
            </div>
          ) : (
            <div className='flex items-center gap-x-8'>
              <li>
                <Link href='/auth/login'>
                  <button
                    className='auth-btn bg-white text-primary-blue-100'
                    onClick={() => signIn()}
                  >
                    Login
                  </button>
                </Link>
              </li>
              <li>
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
              <ShoppingCartIcon className='h-8 w-8 text-white' />
              <span className='absolute top-0 left-[10px] flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-primary-yellow-200 text-white'>
                5
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
                <Link href='/profile' className={styles.links}>
                  Profile
                </Link>
              </li>
              <li>
                <input
                  type='text'
                  placeholder='Search'
                  className={`block w-full rounded-md p-4 font-medium text-black`}
                />
              </li>
              <li className={styles.list}>
                <Link href='/cart' className={styles.links}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        )}
      </ul>
    </nav>
  )
}
