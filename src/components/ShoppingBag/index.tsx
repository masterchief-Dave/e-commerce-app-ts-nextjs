import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

type Props = {}

export const ShoppingFixedBag = (props: Props) => {
  return (
    <Link
      href='/cart'
      className='fixed bottom-20 right-20 z-50 flex h-[7rem] w-[7rem] items-center justify-center rounded-full bg-[#D1D5DB] font-matter'
    >
      <ShoppingBagIcon className='h-12 w-12' />
      <div className='text-md absolute top-0 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-black-100 text-xl font-medium text-white'>
        <span>5</span>
      </div>
    </Link>
  )
}
