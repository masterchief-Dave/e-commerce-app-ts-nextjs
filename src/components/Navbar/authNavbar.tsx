import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {}

export const AuthNavbar = (props: Props) => {
  const router = useRouter()
  const pathname = router.pathname.split('/')[2]


  const handleAuthClick = () => {
    if (pathname === 'login') {
      router.push('/auth/register')
    } else {
      router.push('/auth/login')
    }
  }

  return (
    <div className=''>
      <nav className='grid grid-cols-12 bg-primary-blue-100 py-5'>
        <div className='col-start-2 col-end-12 flex items-center justify-between'>
          <h1 className='text-[2rem] font-bold text-white'>
            <Link href='/'>Sage-Warehouse</Link>
          </h1>

          <button
            className='auth-btn bg-primary-yellow-100 text-primary-blue-100'
            onClick={handleAuthClick}
          >
            {pathname === 'login' ? 'Sign up' : 'Login'}
          </button>
        </div>
      </nav>
    </div>
  )
}
