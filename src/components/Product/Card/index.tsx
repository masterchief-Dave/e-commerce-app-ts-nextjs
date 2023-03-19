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
}

export const ProductCard = ({ img, productName, productPrice }: Props) => {
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
    <div className='w-[25rem] p-4 shadow-product-card-box-shadow'>
      <div className='relative rounded-lg'>
        <Image
          src='https://images.unsplash.com/photo-1617043786394-f977fa12eddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='product-image'
          width={1000}
          height={1000}
          className='rounded-xl'
        />
        <div className='absolute top-5 left-5 z-10'>
          <div className='bg-primary-red-100 px-2 text-[1.2rem] text-white'>
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

      <div className='space-y-2 font-matter'>
        <h3 className='max-w-[20rem] truncate text-center font-medium'>
          Apple watch series 4
        </h3>
        <div className='flex items-center justify-center gap-2 font-semibold'>
          <h5>$450</h5>
          <h6 className='text-primary-grey-500 line-through'>$550</h6>
        </div>
        <div className='flex items-center justify-center gap-4 text-center'>
          <div className='flex items-center'>
            {[0, 0, 0, 0, 0].map((key, index) => {
              return <StarIcon key={index} className='h-4 w-4' />
            })}
          </div>
          <span>5 reviews</span>
        </div>
        <button className='flex h-[3.5rem] w-full items-center justify-center gap-x-4 rounded-[25rem] bg-primary-grey-500 font-semibold hover:bg-primary-blue-400 hover:text-white'>
          <ShoppingBagIcon className='h-4 w-4' />
          <span className='text-[1.2rem] uppercase'>Add to cart</span>
        </button>
      </div>
    </div>
  )
}
