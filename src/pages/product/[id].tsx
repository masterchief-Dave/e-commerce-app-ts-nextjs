import Image from "next/image"
import Link from "next/link"
// import useSWR from 'swr'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline"
import { StarIcon, CheckBadgeIcon } from "@heroicons/react/24/solid"
import { GetServerSideProps } from "next"
import axios from "axios"
import { useSession } from "next-auth/react"
import { Layout } from "@/components/Layout"
// import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from "@/components/Navbar"
import { ShoppingFixedBag } from "@/components/ShoppingBag"
import { Footer } from "@/components/Footer"
import AuthenticatedModal from "@/components/Modal/AuthenticatedModal"
// import { ProductTab } from "@/components/Tabs/Product"
import useAuth from "@/lib/hooks/useAuth"
import { CheckSquareIcon, HeartIcon } from "lucide-react"
import { useAddToCart, useLikeProduct } from "@/lib/hooks/product/product.hook"
import {
  useGetCart,
  useGetLikedProducts,
  useGetUserOrders,
} from "@/lib/hooks/user/user.hook"
import fetchProduct from "@/utils/fetchProduct"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { useToast } from "@/components/ui/use-toast"
import ProductTab from "@/components/organisms/product-tab"

type Props = {
  product: Product
}

const styles = {
  tabHeader: `text-lg font-semibold lg:text-xl cursor-pointer`,
  productDetails: {
    title: `font-normal text-base`,
    description: `font-normal`,
  },
}

const ProductSlug = ({ product }: Props) => {
  const router = useRouter()
  const { toast } = useToast()
  const getCartQuery = useGetCart()
  const getWishlistQuery = useGetLikedProducts()
  const [productQuantity, setProductQuantity] = useState<number>(1)
  // let [isItemInCart, setIsItemInCart] = useState(getCartQuery.data?.data.findIndex((cart) => cart.id === product._id))
  const [openModal, setOpenModal] = useState(false)
  /**
   * I am adding 1 to the useLikeProduct and useAddToCart because I want to refetch the first page in the landing page, this product may not be in the first page, but it doesn't matter because if it is on the second page for example, I am going to request for the second page from the backend and the response data will be updated
   */
  const cartQuery = useAddToCart(1)
  const likeQuery = useLikeProduct(1)
  const { isAuthenticated } = useAuth()
  const isItemInWishlist =
    getWishlistQuery?.data?.message === "success"
      ? getWishlistQuery?.data?.data.some((item) => item === product._id)
      : false
  const isItemInCart =
    getCartQuery.data?.message === "success"
      ? getCartQuery?.data?.data.some((item) => item.id === product._id)
      : false
  const orderQuery = useGetUserOrders()

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      //open the modal
      return setOpenModal(true)
    } else {
      router.push("/checkout")
    }
  }

  // # check if the item is in the cart
  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      return setOpenModal(true)
    }
    const res = await cartQuery.trigger({ id: product._id, page: 1 })
    toast({
      variant: "success",
      title: res?.message,
      description: `${res?.message}`,
    })
  }

  // Add item to the wishlist
  const handleAddToWishlist = async () => {
    if (likeQuery.isMutating) {
      return
    }
    if (!isAuthenticated) {
      return setOpenModal(true)
    }
    const res = await likeQuery.trigger({ id: product._id, page: 1 }, {})
    toast({
      variant: "success",
      title: res?.message,
      description: `Product ${res.message}`,
    })
  }

  return (
    // <Layout>
    <>
      <Navbar />
      <main className="mx-auto grid w-full grid-cols-12 space-y-8 py-24">
        {/* <div className='col-span-full'>
            <BreadCrumb />
          </div> */}

        <div className="col-span-full col-start-2 col-end-12 space-y-8 mb-20">
          <section className="grid grid-cols-12">
            <div className="col-start-1 col-end-7">
              <div className="w-full h-[450px] max-h-[450px] relative">
                <AspectRatio ratio={16 / 9} className="max-h-[450px] h-[450px]">
                  <Image
                    src={product.images[0].url! as string}
                    alt={product.name}
                    fill
                    className="object-cover h-[450px] max-h-[450px]"
                  />
                </AspectRatio>
              </div>
            </div>

            <article className="col-start-8 col-end-13 space-y-4">
              <div className="mb-8">
                <div className="flex items-center gap-x-12">
                  <h1 className=" font-bold leading-relaxed capitalize text-xl">
                    {product.name}
                  </h1>
                  <div className="flex-shrink-0">
                    <HeartIcon
                      onClick={handleAddToWishlist}
                      className="cursor-pointer"
                      fill={isItemInWishlist ? "#FF0000" : "transparent"}
                      stroke="#FF0000"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-x-1">
                  <p className="flex items-center gap-x-1">
                    {new Array(Math.floor(product.ratings))
                      .fill(0)
                      .map((_, index) => {
                        return (
                          <StarIcon
                            key={index}
                            className="h-4 w-4 #EEB012"
                            fill="#EEB012"
                          />
                        )
                      })}

                    {new Array(5 - Math.floor(product.ratings))
                      .fill(0)
                      .map((_, index) => {
                        return (
                          <StarIconOutline
                            key={index}
                            className="h-4 w-4 text-[#EEB012]"
                          />
                        )
                      })}
                  </p>
                </div>
              </div>

              <div className="uppercase text-base space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-x-3">
                    <h4 className={styles.productDetails.title}>Reviews:</h4>
                    <p className="lowercase">4</p>
                  </div>
                </div>

                {/* product availability */}
                <div className="flex items-center gap-x-2">
                  <h5 className={styles.productDetails.title}>Available:</h5>
                  <CheckSquareIcon className="h-5 w-5 text-green-500" />
                </div>

                {/* product category */}
                <div className="flex items-center gap-x-2">
                  <h5 className={`${styles.productDetails.title}`}>
                    Categories:
                  </h5>
                  <p>{product.category}</p>
                </div>

                {/* product brand */}
                <div className="space-y-4">
                  <h5 className={`${styles.productDetails.title}`}>
                    Product Code: <span className="">524162</span>
                  </h5>
                  <h5 className={styles.productDetails.title}>
                    Brand:{" "}
                    <span>
                      <Link href="#" className="text-text-primary-link">
                        {product.seller}
                      </Link>
                    </span>
                  </h5>
                </div>
              </div>

              <div className="flex items-center gap-x-8">
                <p className="text-2xl font-bold">${product.price}</p>

                <p className="text-xl text-[#e0e0e0] font-medium line-through">
                  ${(product.price * 2.3).toFixed(2)}
                </p>
              </div>

              <div className="py-4">
                {/* <h4 className='mb-4  font-medium'>Quantity</h4> */}
                <div className="flex items-center gap-x-8">
                  {/* <div className='flex items-center h-[4rem] '>
                      <button
                        className='border h-full px-6'
                        onClick={() => {
                          setProductQuantity(prev => prev + 1)
                        }}
                      >
                        +
                      </button>
                      <p className='border-t h-[4rem] flex-grow w-[5rem] flex items-center justify-center font-medium bg-[#f6f6f6] border-b py-2 px-4'>{productQuantity}
                      </p>
                      <button
                        className='border h-[4rem] px-6'
                        onClick={() => {
                          if (productQuantity === 1) return
                          setProductQuantity(prev => prev - 1)
                        }}
                      >
                        -
                      </button>
                    </div> */}

                  {/* add to wishlist  */}
                  {/* <button
                    disabled={likeQuery.isMutating}
                    className={`flex h-[40px] gap-x-4 items-center justify-center px-6 rounded-md text-white text-sm ${
                      isItemInWishlist ? "bg-[#FF0000]" : "bg-[#000]"
                    }`}
                    onClick={handleAddToWishlist}
                  >
                    <HeartIcon />
                    <p className="font-medium text-sm">
                      {isItemInWishlist
                        ? "Remove from wishlist"
                        : "Add to Wishlist"}
                    </p>
                  </button> */}

                  {/* add to cart / remove from cart */}
                  <button
                    disabled={cartQuery.isMutating}
                    onClick={handleAddToCart}
                    className={`px-4 h-[40px] w-full flex items-center justify-center text-sm rounded-md bg-black font-semibold text-white`}
                  >
                    {isItemInCart ? "Remove from cart" : "Add to Cart"}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-x-8 py-4">
                {/* open paystack modal here to make payment for this item right here in the slug */}
                {/* <button
                  onClick={handleBuyNow}
                  className="h-[40px] px-4 flex items-center justify-center text-sm rounded-md bg-primary-blue-300 font-semibold text-white"
                >
                  Buy now
                </button> */}
              </div>
            </article>
          </section>
        </div>

        {/* product breakdown tab */}
        <div className="col-span-full col-start-2 col-end-12 py-2">
          {product && <ProductTab product={product} />}
        </div>
      </main>
      <Footer />
      <ShoppingFixedBag />

      {/* modal */}
      {openModal && (
        <AuthenticatedModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
    // </Layout>
  )
}

export default ProductSlug

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { id } = context.query
  const data = await fetchProduct(id as string)

  return {
    props: {
      product: data.data.product,
    },
  }
}
