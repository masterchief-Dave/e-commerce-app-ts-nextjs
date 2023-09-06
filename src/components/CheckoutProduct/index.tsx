import Image from 'next/image'
import { useSelector } from 'react-redux'
import { ChevronDownIcon, ChevronUpIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { RootState } from '@/app/store'
import { useAppDispatch } from '@/hooks/reduxhooks'
import { increaseCartItem, decreaseCartItem, removeItem } from '@/features/cart/cartSlice'

type Props = {
  id: string
  img: string
  name: string
  price: number
  cartQuantity: number
}

const CheckoutProduct = ({ img, name, price, cartQuantity, id }: Props) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const message = useSelector((state: RootState) => state.cart.message)

  // checking the item quantity on the server
  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const { data } = useSWR(`http://localhost:8100/api/v1/products/${id}`, fetcher, { refreshInterval: 1000 })

  if (message !== undefined && message?.length > 2) {
    alert(message)
  }

  return (
    <div className='flex items-center justify-between gap-x-4 lg:gap-x-12 border-b py-8'>
      <section className='flex w-full items-start justify-between gap-x-4 lg:gap-x-12'>
        <div className='relative h-44 w-44'>
          <Image
            src={img}
            alt={name}
            width={1000}
            height={1000}
            className='h-full object-cover'
          />
        </div>
        <div className='grow-[2] flex-col justify-between gap-x-8 text-xl lg:text-2xl'>
          <h2 className='mb-4 font-semibold'>{name}</h2>
          <div className='flex items-center text-text-primary-link'>
            <button
              className='text-xl font-medium lg:text-2xl'
              onClick={() => {
                router.push(`/product/${id}`)
              }}
            >
              {' '}
              <span className='lg:block hidden'>
                Show product details
              </span>
              <span className='lg:hidden block'>
                Show details
              </span>
            </button>
            <span>
              <ChevronRightIcon className='h-6 w-6' />
            </span>
          </div>
        </div>
        <div className='flex grow items-center gap-x-2 lg:gap-x-4 text-xl font-semibold lg:text-2xl'>
          <p>{cartQuantity}</p>
          <div className='flex flex-col items-center justify-center gap-2 lg:gap-4 text-text-primary-link'>
            {/* when the quanity is 1 then disable the button from going lower */}
            <span onClick={() => {
              dispatch(increaseCartItem({ id, stock: data?.data?.product.stock }))
            }}>
              <ChevronUpIcon className='h-8 w-8 cursor-pointer' />
            </span>
            <span onClick={() => {
              dispatch(decreaseCartItem({ id, stock: data?.data?.product.stock }))
            }}>
              <ChevronDownIcon className='h-8 w-8 cursor-pointer' />
            </span>
          </div>
          {/* I want this message to clear after some time */}
          {/* <span className='text-[1.3rem] font-normal text-primary-red-100'> toast {message}</span> */}
        </div>

        <section className='space-y-4 text-xl lg:text-2xl'>
          <p className='text-xl lg:text-[2.5rem] font-black mb-4'>${price.toFixed(2)}</p>
          <p className='cursor-pointer justify-self-end text-right font-medium text-primary-red-100 hover:underline hover:underline-offset-4' onClick={() => {
            dispatch(removeItem({ id, stock: data?.data?.product?.stock }))
          }}>
            Remove
          </p>
        </section>
      </section>
    </div>
  )
}

export default CheckoutProduct
