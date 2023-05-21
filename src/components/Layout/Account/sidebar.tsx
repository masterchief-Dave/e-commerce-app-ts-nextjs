import Link from 'next/link'
import { useRouter } from 'next/router'
import { XMarkIcon } from '@heroicons/react/24/outline'

type Props = {
  setShowMobileSidebar: React.Dispatch<React.SetStateAction<boolean>>
  showMobileSidebar: boolean
}

export const MobileSideBar = ({
  setShowMobileSidebar,
  showMobileSidebar,
}: Props) => {
  const router = useRouter()

  const styles = {
    list: `py-8`,
    link: `block text-[1.2rem] font-medium`,
    active: `text-primary-red-100 text-[1.2rem] block font-medium`,
  }

  return (
    <div className='absolute top-0 left-0 h-screen max-h-screen w-3/5 bg-[#EFEFEF] py-12 px-12 font-inter'>
      {/* close the sidebar */}
      <div className='mb-8 flex justify-end'>
        <div
          className='flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white ring-2 hover:ring-primary-blue-300'
          onClick={() => setShowMobileSidebar(!showMobileSidebar)}
        >
          <XMarkIcon className='h-10 w-10' />
        </div>
      </div>

      <div className='mb-16'>
        <p className='text-[1.7rem] font-semibold text-primary-blue-500 lg:text-[2rem]'>
          Hello 👋, David
        </p>
      </div>

      <nav>
        <ul className='w-full divide-y divide-primary-white-400'>
          <li className={styles.list}>
            <Link
              href='/account/profile'
              className={
                router.pathname === '/account/profile'
                  ? styles.active
                  : styles.link
              }
            >
              Account Information
            </Link>
          </li>

          <li className={styles.list}>
            <Link
              href='/account/delivery-address'
              className={
                router.pathname === '/account/delivery-address'
                  ? styles.active
                  : styles.link
              }
            >
              Delivery Address
            </Link>
          </li>

          <li className={styles.list}>
            <Link
              href='/account/orders'
              className={
                router.pathname === '/account/orders'
                  ? styles.active
                  : styles.link
              }
            >
              Order History
            </Link>
          </li>

          <li className={styles.list}>
            <Link
              href='#'
              className={
                router.pathname === '/account/reviews'
                  ? styles.active
                  : styles.link
              }
            >
              Reviews
            </Link>
          </li>

          <li className={styles.list}>
            <Link
              href='/account-add-payment'
              className={
                router.pathname === '/account/add-payment'
                  ? styles.active
                  : styles.link
              }
            >
              Add Payment Method
            </Link>
          </li>

          <li className={styles.list}>
            <Link
              href='#'
              className={
                router.pathname === '/account/saved-card'
                  ? styles.active
                  : styles.link
              }
            >
              Saved Card
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
