"use client"

import Image from "next/image"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { RenderRating } from "@/lib/helpers/renderRating"
import Link from "next/link"
import { useAddToCart, useLikeProduct } from "@/lib/hooks/product/product.hook"
import { HeartIcon } from "lucide-react"
import useAuth from "@/lib/hooks/useAuth"
import { useGetCart, useGetLikedProducts } from "@/lib/hooks/user/user.hook"
import Spinner from "@/components/molecules/spinner"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import AuthenticatedModal from "@/components/Modal/AuthenticatedModal"

type WishlistProduct = Pick<
  Product,
  | "_id"
  | "name"
  | "price"
  | "ratings"
  | "discount"
  | "discountedPrice"
  | "images"
>

type Props = {
  page: number
  data: WishlistProduct
}

export const ProductCard = ({ page, data }: Props) => {
  const getCartQuery = useGetCart()
  const { trigger, isMutating } = useLikeProduct(page)
  const cartQuery = useAddToCart(page)
  const userQuery = useGetLikedProducts()
  const { isAuthenticated } = useAuth()
  const [authModal, setAuthModal] = useState(false)
  const { toast } = useToast()

  const userFavorites =
    userQuery?.data?.message === "success" ? userQuery?.data?.data : []
  const userCartIds =
    getCartQuery?.data?.message === "success"
      ? getCartQuery?.data?.data?.map((cart) => {
          return cart.id
        })
      : []

  const handleLikeProduct = async () => {
    // is the user authenticated ?
    if (!isAuthenticated) {
      return setAuthModal(true)
    }
    const res = await trigger(
      { id: data?._id, page: page },
      {
        optimisticData: userFavorites && [
          userFavorites.includes(data?._id)
            ? userFavorites?.filter((fav) => fav !== data?._id)
            : [...userFavorites, data._id],
        ],
        rollbackOnError: true,
      }
    )

    toast({
      variant: "success",
      title: res?.message,
      description: `Product ${res?.message}`,
    })
  }

  // cart
  const handleAddToCart = async () => {
    // is the user authenticated
    if (!isAuthenticated) {
      return setAuthModal(true)
    }
    if (!data) return
    const res = await cartQuery.trigger(
      { id: data?._id, page: page },
      {
        rollbackOnError: true,
      }
    )

    toast({
      variant: "success",
      title: res?.message,
      description: `Product ${res?.message}`,
    })
  }

  return (
    <>
      <div className="max-w-[250px] rounded-lg space-y-4 p-2 shadow-sm border">
        <div className="relative max-h-[200px]">
          <Link
            href={`/product/${data._id}`}
            className="block h-[200px] max-h-[150px] object-contain"
          >
            <Image
              width={1000}
              height={1000}
              src={data?.images?.[0]?.url}
              alt={data?.images?.[0]?.public_id}
              className="h-[200px] max-h-[150px] object-contain"
            />
          </Link>
          <div className="absolute top-5 left-5 z-10">
            <div className="bg-primary-red-100 px-2 text-white text-sm">
              {data?.discount}%
            </div>
          </div>

          <div className="absolute top-5 right-5 cursor-pointer rounded-md p-2">
            {userQuery.isLoading ? (
              <Spinner />
            ) : isMutating ? (
              <Spinner />
            ) : (
              <button
                disabled={isMutating || userQuery.isValidating}
                onClick={handleLikeProduct}
                className="h-10 w-10 rounded-full bg-white flex items-center justify-center"
              >
                <HeartIcon
                  aria-disabled={isMutating || userQuery.isValidating}
                  fill={
                    userQuery?.data?.data.includes(data._id)
                      ? "#FF0000"
                      : "transparent"
                  }
                  stroke={
                    userQuery.data?.data.includes(data._id)
                      ? "#FF0000"
                      : "#FF0000"
                  }
                />
              </button>
            )}
          </div>
        </div>

        <div className="space-y-4 py-2">
          <Link
            href={`/product/${data._id}`}
            className="max-w-[200px] block truncate text-center font-normal"
          >
            {data.name}
          </Link>
          <div className="flex items-center justify-center gap-6 font-semibold">
            <h5 className="text-primary-green-100 font-bold ">
              ${data.price.toFixed(2)}
            </h5>
            {/* <h6 className='text-[#e94560] font-medium text-[1.3rem] line-through'>$550</h6> */}
          </div>
          <div className="flex items-center justify-center gap-4 text-center">
            <div className="flex items-center">
              {new Array(Math.floor(data.ratings))
                .fill("0")
                .map((rating, index) => {
                  return <RenderRating color="#edab56" rating={4} key={index} />
                })}
              {new Array(5 - Math.floor(data.ratings))
                .fill("0")
                .map((rating, index) => {
                  return (
                    <RenderRating color="transparent" rating={1} key={index} />
                  )
                })}
            </div>
            {/* <span className=''>{data.ratings}</span> */}
          </div>
          <button
            className={`flex h-[35px] w-full items-center text-sm justify-center gap-x-4 rounded-md border font-semibold hover:transition-all hover:delay-75 ${
              userCartIds?.includes(data._id)
                ? "text-[#FF0000] hover:bg-[#FF0000] hover:text-white"
                : "bg-white hover:bg-primary-blue-300 hover:text-white "
            }`}
            onClick={handleAddToCart}
          >
            <ShoppingBagIcon className="h-4 w-4" />
            {userCartIds?.includes(data?._id) ? (
              <span className="capitalize ">
                {cartQuery.isMutating ? <Spinner /> : "Remove from cart"}
              </span>
            ) : (
              <span className="capitalize ">
                {cartQuery.isMutating ? <Spinner /> : "Add to cart"}
              </span>
            )}
          </button>
        </div>
      </div>
      {authModal && (
        <AuthenticatedModal openModal={authModal} setOpenModal={setAuthModal} />
      )}
    </>
  )
}

//  {openModal && <AuthenticatedModal openModal={openModal} setOpenModal={setOpenModal} />}
