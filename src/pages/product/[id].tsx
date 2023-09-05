import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { HeartIcon, StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { Tab } from '@headlessui/react'

import { useAppDispatch } from '@/hooks/reduxhooks'
import { Layout } from '@/components/Layout'
// import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from '@/components/Navbar'
import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { Overview } from '@/components/Product/Tabs/overview'
import { Description } from '@/components/Product/Tabs/description'
import { ReturnPolicy } from '@/components/Product/Tabs/returnPolicy'
import { Reviews } from '@/components/Product/Tabs/reviews'
import { Shipping } from '@/components/Product/Tabs/shipping'
import { Warranty } from '@/components/Product/Tabs/warranty'
import { Footer } from '@/components/Footer'
import { addToCart } from '@/features/cart/cartSlice'
import { useCart } from '@/hooks/useCart'
import { useSession } from 'next-auth/react'
import AuthenticatedModal from '@/components/Modal/AuthenticatedModal'
import { ProductTab } from '@/components/Tabs/Product'

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
  const dispatch = useAppDispatch()
  const { cart } = useCart()
  const session = useSession()
  const [productQuantity, setProductQuantity] = useState<number>(1)
  let [isItemInCart, setIsItemInCart] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  // useEffect(() => {
  //   // check if the user is authenticated
  //   if (session.status === 'authenticated') {
  //     setOpenModal(false)
  //   }else {

  //   }
  // }, [])

  const handleBuyNow = () => {
    // some code
    if (session.status !== 'authenticated') {
      //open the modal
      // 
    }

    // open paystack modal to make payment
  }

  // # check if the item is in the cart
  useEffect(() => {
    const isItemInCart = cart.filter((item: Product) => {
      return item._id === product._id
    })

    if (isItemInCart.length === 1) {
      setIsItemInCart(true)
    }

  }, [cart])

  const handleAddToCart = () => {
    dispatch(addToCart({
      ...product,
      cartQuantity: productQuantity
    }))
  }

  return (
    <Layout>
      <>
        <Navbar />
        <main className='mx-auto grid w-full grid-cols-12 space-y-12 py-32 font-jost'>
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
                  <h4 className='mb-4 text-lg font-medium'>Quantity</h4>
                  <div className='flex items-center gap-x-8'>
                    <div className='flex items-center h-[4rem] text-[1.4rem]'>
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
  const response = await axios.get(`https://sage-warehouse-backend.onrender.com/api/v1/products/${id}`)
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