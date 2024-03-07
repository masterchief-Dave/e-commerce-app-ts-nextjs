"use client"

import Image from 'next/image'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { RenderRating } from '@/helpers/renderRating'
import Link from 'next/link'
import { useAddToCart, useLikeProduct } from "@/lib/hooks/product/product.hook"
import { HeartIcon } from "lucide-react"
import useAuth from "@/lib/hooks/useAuth"
import { useGetCart, useGetLikedProducts } from "@/lib/hooks/user/user.hook"
import Spinner from "@/components/molecules/spinner"
import { useToast } from "@/components/ui/use-toast"

type Props = {
  page: number
  data: Product
}

export const ProductCard = ({ page, data }: Props) => {
  // const userQuery = useGetLikedProducts()
  const { trigger, isMutating } = useLikeProduct(page)
  const cartQuery = useAddToCart(page)
  // const getCartQuery = useGetCart()

  // const userFavorites = userQuery?.data?.data
  // const userCartIds = getCartQuery?.data?.data.map((cart) => {
  //   return cart.id
  // })

  // const handleLikeProduct = () => {
  //   trigger({ id: data?._id, page: page }, {
  //     optimisticData: userFavorites && ([userFavorites.includes(data?._id) ? userFavorites?.filter((fav) => fav !== data?._id) : [...userFavorites, data._id]]),
  //     rollbackOnError: true
  //   })
  // }

  // cart
  const handleAddToCart = () => {
    if (!data) return

    cartQuery.trigger({ id: data?._id, page: page }, {
      rollbackOnError: true
    })
  }

  return (
    <div className='max-w-[25rem] rounded-lg space-y-8 p-4 shadow-sm border'>
      <div className='relative max-h-[20rem]'>
        <Link href={`/product/${data._id}`} className='block h-[20rem] max-h-[15rem] object-contain'>
          <Image
            width={1000}
            height={1000}
            src={data.images[0].url}
            alt={data.images[0].public_id}
            className='h-[20rem] max-h-[15rem] object-contain'
          />
        </Link>
        <div className='absolute top-5 left-5 z-10'>
          <div className='bg-primary-red-100 px-2 text-[1.6rem] text-white lg:text-[1.2rem]'>
            25%
          </div>
        </div>

        <div
          className='absolute top-5 right-5 cursor-pointer rounded-md p-2'
        >
          {/* {userQuery.isLoading ? <Spinner /> : (
            isMutating ? <Spinner /> : (
              <button
                disabled={isMutating || userQuery.isValidating}
                onClick={handleLikeProduct}
                className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
                <HeartIcon
                  aria-disabled={isMutating || userQuery.isValidating}
                  fill={userQuery?.data?.data.includes(data._id) ? '#FF0000' : 'transparent'} stroke={userQuery.data?.data.includes(data._id) ? '#FF0000' : '#FF0000'} />
              </button>
            )
          )} */}
        </div>
      </div>

      <div className='space-y-8 py-2 '>
        <Link href={`/product/${data._id}`} className='max-w-[20rem] block truncate text-center text-[1.6rem] font-normal lg:text-[1.6rem]'>
          {data.name}
        </Link>
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
          {/* <span className='text-[1.6rem]'>{data.ratings}</span> */}
        </div>
        {/* <button
          className={`flex h-[3.5rem] w-full items-center justify-center gap-x-4 rounded-md border font-semibold hover:transition-all hover:delay-75 ${userCartIds?.includes(data._id) ? 'text-[#FF0000] hover:bg-[#FF0000] hover:text-white' : 'bg-white hover:bg-primary-blue-300 hover:text-white '}`}
          onClick={handleAddToCart}
        >
          <ShoppingBagIcon className='h-8 w-8' />
          {userCartIds?.includes(data?._id) ? (
            <span className='capitalize text-[1.6rem]'>
              {cartQuery.isMutating ? <Spinner /> : 'Remove from cart'}
            </span>
          ) : (
            <span className='capitalize text-[1.6rem]'>
              {cartQuery.isMutating ? <Spinner /> : 'Add to cart'}
            </span>
          )}

        </button> */}
      </div>
    </div >
  )
}
