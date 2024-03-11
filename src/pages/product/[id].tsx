import Image from 'next/image'
import Link from 'next/link'
// import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { Layout } from '@/components/Layout'
// import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from '@/components/Navbar'
import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { Footer } from '@/components/Footer'
import AuthenticatedModal from '@/components/Modal/AuthenticatedModal'
import { ProductTab } from '@/components/Tabs/Product'
import useAuth from "@/lib/hooks/useAuth"
import { HeartIcon } from "lucide-react"
import { useAddToCart, useLikeProduct } from "@/lib/hooks/product/product.hook"
import { useGetCart, useGetLikedProducts } from "@/lib/hooks/user/user.hook"
import fetchProduct from "@/utils/fetchProduct"

type Props = {
  product: Product
}

const styles = {
  tabHeader: `text-lg font-semibold lg:text-2xl cursor-pointer`,
  productDetails: {
    title: `font-semibold`,
    description: `font-medium`
  }
}

const ProductSlug = ({ product }: Props) => {
  const router = useRouter()
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
  const { user, isAuthenticated } = useAuth()

  const isItemInWishlist = getWishlistQuery?.data?.data.findIndex((item) => item === product._id)
  const isItemInCart = getCartQuery?.data?.data.findIndex((item) => item.id === product._id)
  console.log({ isItemInCart })

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      //open the modal
      return setOpenModal(true)
    } else {
      router.push('/checkout')
    }
  }

  // # check if the item is in the cart
  const handleAddToCart = () => {
    if (!isAuthenticated) {
      return setOpenModal(true)
    }
    cartQuery.trigger({ id: product._id, page: 1 })
  }

  const handleAddToWishlist = () => {
    if (!isAuthenticated) {
      return setOpenModal(true)
    }
    likeQuery.trigger({ id: product._id, page: 1 }, {})
  }

  return (
    // <Layout>
    <>
      <Navbar />
      <main className='mx-auto grid w-full grid-cols-12 space-y-12 py-32 '>
        {/* <div className='col-span-full'>
            <BreadCrumb />
          </div> */}

        <div className='col-span-full col-start-2 col-end-12 space-y-12 mb-20'>

          <section className='grid grid-cols-12'>
            <div className='col-start-1 col-end-6 border'>
              <Image
                src={product.images[0].url! as string}
                alt={product.name}
                width={1000}
                height={1000}
                className='object-cover w-full h-full'
              />
            </div>

            <article className='col-start-7 col-end-13 space-y-4'>
              <div className="mb-12">
                <h1 className='text-[1.6rem] font-bold leading-relaxed capitalize lg:text-[2rem]'>
                  {product.name}
                </h1>
                <div className='flex items-center gap-x-1'>
                  {/* {renderRating(data.data.product.ratings, '#EEB012')}
                      {renderRating(5 - data.data.product.ratings, '')} */}

                  <p className="flex items-center gap-x-1">
                    {new Array(Math.floor(product.ratings)).fill(0).map((_, index) => {
                      return <StarIcon key={index} className="h-8 w-8 #EEB012" fill='#EEB012' />
                    })}

                    {new Array(5 - Math.floor(product.ratings)).fill(0).map((_, index) => {
                      return <StarIconOutline key={index} className="h-8 w-8 text-[#EEB012]" />
                    })}
                  </p>
                </div>
              </div>

              <div className='uppercase text-[1.5rem] space-y-8'>
                <div className='space-y-4'>
                  <div className="flex items-center gap-x-3">
                    <h4 className="font-semibold">Reviews:</h4>
                    <p className='lowercase text-primary-grey-300'>
                      4
                    </p>
                  </div>
                </div>

                {/* product availability */}
                <div className='flex items-center gap-x-2'>
                  <h5 className='font-semibold'>Available:</h5>
                  <CheckBadgeIcon fill='#6bb853' className='h-8 w-8' />
                </div>

                {/* product weight */}
                {/* <div className='grid grid-cols-productSlug'>
                    <h5 className={`${styles.productDetails.title}`}>Sku: </h5>
                    <p></p>
                  </div> */}

                {/* product category */}
                <div className='flex items-center gap-x-2'>
                  <h5 className={`${styles.productDetails.title}`}>Categories:</h5>
                  <p>{product.category}</p>
                </div>

                {/* product brand */}
                <div className='space-y-4'>
                  <h5 className={`${styles.productDetails.title}`}>
                    Product Code:{' '}
                    <span className='text-primary-grey-100'>524162</span>
                  </h5>
                  <h5 className={styles.productDetails.title}>
                    Brand:{' '}
                    <span>
                      <Link href='#' className='text-text-primary-link'>
                        {product.seller}
                      </Link>
                    </span>
                  </h5>
                </div>
              </div>

              <div className='flex items-center gap-x-8'>
                <p className='text-[2rem] font-bold lg:text-[3rem]'>${product.price}</p>

                <p className='text-[1.8rem] text-[#e0e0e0] font-medium line-through'>
                  ${(product.price * 2.3).toFixed(2)}
                </p>
              </div>

              <div className='py-4'>
                {/* <h4 className='mb-4 text-[1.6rem] font-medium'>Quantity</h4> */}
                <div className='flex items-center gap-x-8'>
                  {/* <div className='flex items-center h-[4rem] text-[1.6rem]'>
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
                  <button
                    disabled={likeQuery.isMutating}
                    className={`flex h-[4rem] gap-x-4 items-center justify-center px-6 rounded-md text-white text-[1.2rem] ${isItemInWishlist === 0 ? 'bg-[#FF0000]' : 'bg-[#000]'}`}
                    onClick={handleAddToWishlist}>
                    <HeartIcon className='h-8 w-8' />
                    <p className="font-medium text-[1.5rem]">
                      {isItemInWishlist === 0 ? 'Remove from wishlist' : 'Add to Wishlist'}
                    </p>
                  </button>
                </div>
              </div>

              {
                /**
                 * check if the user is authenticated, if not bring up authentication and redirect them to the billing address part, or they should have filled in billing address before they click on buy now I suppose
                 * 
                 * 
               */
              }

              <div className='flex items-center gap-x-8 py-4'>
                {/* open paystack modal here to make payment for this item right here in the slug */}
                <button
                  onClick={handleBuyNow}
                  className='w-[20rem] h-[4rem] flex items-center justify-center text-[1.5rem] rounded-md bg-primary-blue-300 font-semibold text-white'>
                  Buy now
                </button>

                {/* add to cart / remove from cart */}
                <button
                  disabled={cartQuery.isMutating}
                  onClick={handleAddToCart}
                  className={`w-[20rem] h-[4rem] flex items-center justify-center text-[1.5rem] rounded-md bg-black font-semibold text-white`}>
                  {isItemInCart === 0 ? 'Remove from cart' : 'Add to Cart'}
                </button>
              </div>
            </article>
          </section>
        </div>

        {/* product breakdown tab */}
        <div className='col-span-full col-start-2 col-end-12 bg-[#f6f6f6] py-2'>
          {product && <ProductTab product={product} />}
        </div>

      </main>
      <Footer />
      <ShoppingFixedBag />
      {/* modal */}
      {openModal && <AuthenticatedModal openModal={openModal} setOpenModal={setOpenModal} />}
    </>
    // </Layout>
  )
}

export default ProductSlug


export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { id } = context.query
  const data = await fetchProduct(id as string)

  return {
    props: {
      product: data.data.product
    }
  }
}