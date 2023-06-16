import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Layout } from '@/components/Layout'
import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from '@/components/Navbar'
import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { Overview } from '@/components/Product/Tabs/overview'
import { Description } from '@/components/Product/Tabs/description'
import { ReturnPolicy } from '@/components/Product/Tabs/returnPolicy'
import { Reviews } from '@/components/Product/Tabs/reviews'
import { Shipping } from '@/components/Product/Tabs/shipping'
import { Warranty } from '@/components/Product/Tabs/warranty'
import { Footer } from '@/components/Footer'

import { HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'

type Props = {}

const ProductSlug = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState('overview')

  const styles = {
    tabHeader: `text-lg font-semibold lg:text-2xl cursor-pointer`,
    productDetails: {
      title: `font-semibold`,
      description: `font-medium`
    }
  }

  const renderRating = (value: number, color = '#eeb012') => {
    return (
      <div className='flex items-center gap-x-1'>
        {new Array(Math.floor(value)).fill(1).map((el: any, index: number) => {
          return <StarIcon
            className={`h-8 w-8`}
            fill={color ? color : '#EEB012'}
          />
        })}
      </div>
    )
  }

  const render = () => {
    if (selectedTab === 'overview') {
      return <Overview />
    } else if (selectedTab === 'description') {
      return <Description />
    } else if (selectedTab === 'returnPolicy') {
      return <ReturnPolicy />
    } else if (selectedTab === 'reviews') {
      return <Reviews />
    } else if (selectedTab === 'shipping') {
      return <Shipping />
    } else if (selectedTab === 'warranty') {
      return <Warranty />
    }
  }

  // MouseEvent<HTMLHeadingElement, MouseEvent>
  const handleSelectedTab = (e: any) => {
    if (e.target.id !== null) {
      setSelectedTab(e.target.id)
    }
  }

  return (
    <Layout>
      <>
        <Navbar />
        <main className='mx-auto grid w-full grid-cols-12 space-y-12 py-32 font-inter'>
          {/* <div className='col-span-full'>
            <BreadCrumb />
          </div> */}

          <div className='col-span-full col-start-2 col-end-12 space-y-12 mb-20'>

            <section className='grid grid-cols-12'>
              <div className='col-start-1 col-end-6 border'>
                <Image
                  src='/assets/img/ps4-1.png'
                  alt='play station 4'
                  width={1000}
                  height={1000}
                  className='object-cover w-full h-full'
                />
              </div>

              <article className='col-start-7 col-end-13 space-y-4'>
                <h1 className='text-[1.6rem] font-bold leading-[1rem] capitalize lg:text-[2rem] mb-12'>
                  Sony Playstation 4 console
                </h1>

                <div className='uppercase space-y-8'>
                  <div className='grid grid-cols-productSlug items-center justify-between'>
                    {renderRating(5)}

                    <p className='text-[1.4rem] text-primary-grey-300'> 4 Reviews
                    </p>
                  </div>

                  {/* product availability */}
                  <div className='grid grid-cols-productSlug'>
                    <h5 className='font-semibold'>Available:</h5>
                    <CheckBadgeIcon fill='#6bb853' className='h-6 w-6' />
                  </div>

                  {/* product weight */}
                  <div className='grid grid-cols-productSlug'>
                    <h5 className={`${styles.productDetails.title}`}>Sku: </h5>
                    <p></p>
                  </div>

                  {/* product category */}
                  <div className='grid grid-cols-productSlug'>
                    <h5 className={`${styles.productDetails.title}`}>Categories:</h5>
                    <p>console, games, game</p>
                  </div>

                  {/* product brand */}
                  <div className='grid grid-cols-productSlug'>
                    <h5 className={`${styles.productDetails.title}`}>
                      Product Code:{' '}
                      <span className='text-primary-grey-100'>524162</span>
                    </h5>
                    <p>
                      Brand:{' '}
                      <span>
                        <Link href='#' className='text-text-primary-link'>
                          Sony
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>



                <div className='flex items-center gap-x-8'>
                  <p className='text-[2rem] font-bold lg:text-[3rem] '>NGN 140,000</p>

                  <p className='text-[1.8rem] text-[#e0e0e0] font-medium line-through'>
                    NGN 200,000
                  </p>
                </div>

                <div className='py-4'>
                  <h4 className='mb-4 text-lg font-medium'>Quantity</h4>
                  <div className='flex items-center gap-x-8'>
                    <div className='flex items-center h-[4rem] text-[1.4rem]'>
                      <button className='border h-full px-6'>+</button>
                      <p className='border-t h-[4rem] flex-grow w-[5rem] flex items-center justify-center font-medium bg-[#f6f6f6] border-b py-2 px-4'>1</p>
                      <button className='border h-[4rem] px-6'>-</button>
                    </div>

                    <button className='flex h-[4rem] gap-x-4 items-center justify-center px-6 bg-[#f6f6f6] text-[1.2rem]'>
                      <HeartIcon className='h-8 w-8' />
                      <p>Add to Cart</p>
                    </button>
                  </div>
                </div>

                <div className='flex items-center gap-x-8 py-4'>
                  <button className='w-[20rem] h-[4rem] flex items-center justify-center text-[1.5rem] rounded-md bg-primary-blue-300 font-semibold text-white'>
                    Buy now
                  </button>

                  <button className='w-[20rem] h-[4rem] flex items-center justify-center text-[1.5rem] rounded-md bg-black font-semibold text-white'>
                    Add to Cart
                  </button>

                </div>
              </article>
            </section>
          </div>

          {/* product breakdown tab */}
          <div className='col-span-full col-start-2 col-end-12 bg-[#f6f6f6] py-2'>
            <section>
              <div className='grid grid-cols-6 px-4 border-b py-4'>
                <div>
                  <h2
                    id='overview'
                    className={`${styles.tabHeader} ${selectedTab === 'overview' ? 'text-primary-link' : ''
                      }`}
                    onClick={handleSelectedTab}
                  >
                    Overview
                  </h2>
                </div>
                <div>
                  <h2
                    id='description'
                    className={`${styles.tabHeader} ${selectedTab === 'description' ? 'text-primary-link' : ''
                      }`}
                    onClick={handleSelectedTab}
                  >
                    Description
                  </h2>
                </div>
                <div>
                  <h2
                    id='shipping'
                    className={`${styles.tabHeader} ${selectedTab === 'shipping' ? 'text-primary-link' : ''
                      }`}
                    onClick={handleSelectedTab}
                  >
                    Shipping
                  </h2>
                </div>
                <div>
                  <h2
                    id='warranty'
                    className={`${styles.tabHeader} ${selectedTab === 'warranty' ? 'text-primary-link' : ''
                      }`}
                    onClick={handleSelectedTab}
                  >
                    Warranty
                  </h2>
                </div>
                <div>
                  <h2
                    id='returnPolicy'
                    className={`${styles.tabHeader} ${selectedTab === 'returnPolicy' ? 'text-primary-link' : ''
                      }`}
                    onClick={handleSelectedTab}
                  >
                    Return policy
                  </h2>
                </div>
                <div>
                  <h2
                    id='reviews'
                    className={`${styles.tabHeader} ${selectedTab === 'reviews' ? 'text-primary-link' : ''
                      }`}
                    onClick={handleSelectedTab}
                  >
                    Reviews
                  </h2>
                </div>
              </div>
              <article className='max-h-[50vh] overflow-y-auto px-8 py-8 text-primary-grey-100'>
                {render()}
              </article>
            </section>
          </div>
        </main>
        <Footer />
        <ShoppingFixedBag />
      </>
    </Layout>
  )
}

export default ProductSlug
