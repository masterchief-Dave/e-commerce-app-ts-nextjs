import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'

import { signIn, signOut, useSession, getSession } from 'next-auth/react'
import Image from 'next/image'
import { NextApiRequest } from 'next'

type Props = {}

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

  const mobileNavbar = <nav className=''></nav>

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
        <li className='grow'>
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

// export async function getServerSideProps(req: NextApiRequest) {
//   console.log(req)
//   const session = await getSession({ req })
//   console.log(session)

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: { session },
//   }
// }
