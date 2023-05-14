import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

type Props = {}

export const ShoppingFixedBag = (props: Props) => {
  return (
    <Link
      href='/cart'
      className='fixed bottom-20 right-20 z-50 flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-[#D1D5DB] font-matter lg:h-[7rem] lg:w-[7rem]'
    >
      <ShoppingBagIcon className='h-6 w-6 lg:h-12 lg:w-12' />
      <div className='lg:text-md absolute top-0 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-black-100 text-base font-medium text-white lg:h-8 lg:w-8'>
        <span>5</span>
      </div>
    </Link>
  )
}
