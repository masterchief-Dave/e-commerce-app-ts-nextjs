import Link from 'next/link'

import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useGetCart } from "@/lib/hooks/user/user.hook"

export const ShoppingFixedBag = () => {
  const cart = useGetCart()

  const itemsInCart = cart?.data?.data.length || 0

  return (
    <Link
      href='/cart'
      className='fixed bottom-20 right-20 z-50 flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-[#D1D5DB]  lg:h-[7rem] lg:w-[7rem]'
    >
      <ShoppingBagIcon className='h-6 w-6 lg:h-12 lg:w-12' />
      <div className='lg:text-md absolute top-0 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-black-100 text-[1.6rem] font-medium text-white lg:h-8 lg:w-8'>
        <span>{itemsInCart}</span>
      </div>
    </Link>
  )
}
