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
  const session = useSession()
  const [productQuantity, setProductQuantity] = useState<number>(1)
  let [isItemInCart, setIsItemInCart] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const { user } = useAuth()
  console.log({ user })

  const handleBuyNow = () => {
    // add the product to cart
    if (isItemInCart === false) {
      handleAddToCart()
    }

    if (session.status !== 'authenticated') {
      //open the modal
      setOpenModal(true)
    } else {
      router.push('/checkout')
    }
  }

  // # check if the item is in the cart


  const handleAddToCart = () => {
    // add item to cart
  }

  return (
    <Layout>
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
                <h1 className='text-[1.6rem] font-bold leading-relaxed capitalize lg:text-[2rem] mb-12'>
                  {product.name}
                </h1>

                <div className='uppercase text-[1.5rem] space-y-8'>
                  <div className=''>

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

                    <p className='text-[1.2rem] lowercase text-primary-grey-300'> 4 Reviews
                    </p>
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
                  <h4 className='mb-4 text-[1.6rem] font-medium'>Quantity</h4>
                  <div className='flex items-center gap-x-8'>
                    <div className='flex items-center h-[4rem] text-[1.6rem]'>
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
                    </div>

                    {/* add to wishlist  */}
                    {/* <button className='flex h-[4rem] gap-x-4 items-center justify-center px-6 bg-[#f6f6f6] text-[1.2rem]'>
                      <HeartIcon className='h-8 w-8' />
                      <p>Add to Wishlist</p>
                    </button> */}
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

                  {/* add to cart  */}
                  <button
                    onClick={handleAddToCart}
                    disabled={isItemInCart}
                    className={`${isItemInCart ? 'cursor-not-allowed' : ''} w-[20rem] h-[4rem] flex items-center justify-center text-[1.5rem] rounded-md bg-black font-semibold text-white`}>
                    Add to Cart
                  </button>
                </div>
              </article>
            </section>
          </div>

          {/* product breakdown tab */}
          <div className='col-span-full col-start-2 col-end-12 bg-[#f6f6f6] py-2'>
            <ProductTab product={product} />
          </div>

        </main>
        <Footer />
        <ShoppingFixedBag />
        {/* modal */}
        {openModal && <AuthenticatedModal openModal={openModal} setOpenModal={setOpenModal} />}
      </>
    </Layout>
  )
}

export default ProductSlug

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { id } = context.query
  // move this code into next api route
  const response = await axios.get(`https://sage-warehouse-backend.onrender.com/api/v1/products/${id}`)
  // const response = await axios.get(`http://127.0.0.1:3002/api/products/get-product/${id}`)
  const data = await response.data


  // console.log({ data })
  /**
   *  can I check from here if the item is already in the cart already from here, useCart will not work here because this side is server side rendered
   * i want to persist the cart in the local storage so from there i guess i can check if an item is already in the cart 
   * */

  return {
    props: {
      product: data.data.product
    }
  }
}