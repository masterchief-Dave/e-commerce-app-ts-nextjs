import Image from 'next/image'
import { HeartIcon } from '@/globals/icons'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

import { addToCart } from '@/features/cart/cartSlice'
import { addToWishList, removeFromWishlist } from '@/features/wishlist/wishlistSlice'
import { useAppDispatch } from '@/hooks/reduxhooks'
import { RenderRating } from '@/helpers/renderRating'
import { Product } from '../../../../types'

type Props = {
  data: Product
}

export const ProductCard = ({ data }: Props) => {
  const dispatch = useAppDispatch()
  const [clicked, setClicked] = useState<boolean | null>(null)

  const handleFavourite = () => {
    if (clicked === null) {
      return setClicked(true)
    } else {
      setClicked(!clicked)
    }
  }

  useEffect(() => {
    if (clicked === true) {
      dispatch(addToWishList(data))
      toast.success('Item added to wishlist')
    } else if (clicked === false) {
      // remove from wishlist
      dispatch(removeFromWishlist({
        id: data._id
      }))
      toast.success('Item removed from wishlist')
    }
  }, [clicked])

  // cart
  const handleAddToCart = () => {
    if (!data) return

    dispatch(addToCart(data))
  }

  return (
    <div className='max-w-[25rem] font-jost space-y-8 p-4 shadow-sm border'>
      <div className='relative max-h-[20rem]'>
        <Image
          width={1000}
          height={1000}
          src={data.images[0].url}
          alt={data.images[0].public_id}
          className='h-[20rem] max-h-[15rem] object-contain'
        />
        <div className='absolute top-5 left-5 z-10'>
          <div className='bg-primary-red-100 px-2 text-base text-white lg:text-[1.2rem]'>
            25%
          </div>
        </div>

        <div
          className='absolute top-5 right-5 cursor-pointer rounded-md p-2'
        >
          <HeartIcon
            className='h-10 w-10 text-blue-500'
            handleFavourite={handleFavourite}
            fill={clicked === true ? '#3b82f6' : 'none'}
          />
        </div>
      </div>

      <div className='space-y-8 py-2 font-jost'>
        <h3 className='max-w-[20rem] truncate text-center text-base font-normal lg:text-[1.4rem]'>
          {data.name}
        </h3>
        <div className='flex items-center justify-center gap-6 font-semibold'>
          <h5 className='text-primary-green-100 font-bold text-[1.6rem]'>${data.price.toFixed(2)}</h5>
          {/* <h6 className='text-[#e94560] font-medium text-[1.3rem] line-through'>$550</h6> */}
        </div>
        <div className='flex items-center justify-center gap-4 text-center'>
          <div className='flex items-center'>
            {new Array(Math.floor(data.ratings)).fill('0').map((rating, index) => {
              return <RenderRating color='#edab56' rating={4} key={index} />
            })}
            {new Array(5 - (Math.floor(data.ratings))).fill('0').map((rating, index) => {
              return <RenderRating color='transparent' rating={1} key={index} />
            })}
          </div>
          {/* <span className='text-[1.4rem]'>{data.ratings}</span> */}
        </div>
        <button
          className='flex h-[3.5rem] w-full items-center justify-center gap-x-4 rounded-md bg-white border font-semibold hover:bg-primary-blue-300 hover:text-white hover:transition-all hover:delay-75'
          onClick={handleAddToCart}
        >
          <ShoppingBagIcon className='h-8 w-8' />
          <span className='capitalize text-[1.4rem]'>
            Add to cart
          </span>
        </button>
      </div>
    </div>
  )
}
