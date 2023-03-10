import Link from 'next/link'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

type Props = {}

export const Navbar = (props: Props) => {
  return (
    <nav className='grid grid-cols-12 bg-primary-blue-100 py-4 font-poppins'>
      <ul className='col-start-2 col-end-12 flex items-center justify-between gap-x-8'>
        <li>
          <Link href='#' className='text-[2rem] font-black text-white'>
            Warehouse
          </Link>
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
          <li>
            <Link href='/auth/login'>
              <button className='auth-btn bg-white text-primary-blue-100'>
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
      </ul>
    </nav>
  )
}
