import Image, { StaticImageData } from 'next/image'
import { HeartIcon } from '@/globals/icons'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { StarIcon } from '@heroicons/react/24/outline'

type Props = {
  img: string | StaticImageData
  productName: string
  productPrice: string
  data: Product
}

export const ProductCard = ({
  img,
  productName,
  productPrice,
  data,
}: Props) => {
  const [clicked, setClicked] = useState<boolean>(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()

    setClicked(!clicked)

    if (clicked === true) {
      return toast('Item removed from cart')
    } else if (clicked === false) {
      return toast('Item added to cart')
    }
  }

  return (
    <div className='max-w-[25rem] rounded-xl p-4 shadow-product-card-box-shadow'>
      <div className='relative max-h-[20rem] rounded-xl'>
        <Image
          width={1000}
          height={1000}
          src={data.images[0].url}
          alt={data.images[0].public_id}
          className='h-[20rem] max-h-[15rem] rounded-xl object-contain'
        />
        <div className='absolute top-5 left-5 z-10'>
          <div className='bg-primary-red-100 px-2 text-base text-white lg:text-[1.2rem]'>
            25%
          </div>
        </div>

        <div
          className='absolute top-5 right-5  cursor-pointer rounded-md bg-[#fff] p-2'
          onClick={handleClick}
        >
          <HeartIcon
            className='h-8 w-8 text-black'
            fill={clicked === true ? '#105caa' : 'none'}
          />
        </div>
      </div>

      <div className='space-y-2 py-2 font-inter'>
        <h3 className='max-w-[20rem] truncate text-center text-base font-normal lg:text-[1.4rem]'>
          {data.name}
        </h3>
        <div className='flex items-center justify-center gap-2 font-semibold'>
          <h5>{data.price}</h5>
          <h6 className='text-primary-grey-500 line-through'>$550</h6>
        </div>
        <div className='flex items-center justify-center gap-4 text-center'>
          <div className='flex items-center'>
            {[0, 0, 0, 0, 0].map((key, index) => {
              return <StarIcon key={index} className='h-4 w-4' />
            })}
          </div>
          <span>{data.ratings} reviews</span>
        </div>
        <button className='flex h-[3.5rem] w-full items-center justify-center gap-x-4 rounded-xl bg-primary-grey-500 font-semibold hover:bg-primary-blue-400 hover:text-white hover:transition-all hover:delay-75'>
          <ShoppingBagIcon className='h-4 w-4' />
          <span className='text-base uppercase lg:text-[1.2rem]'>
            Add to cart
          </span>
        </button>
      </div>
    </div>
  )
}
