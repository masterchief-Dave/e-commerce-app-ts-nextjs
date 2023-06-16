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
  }

  const renderRating = (value: number, color = '#eeb012') => {
    return (
      <div className='flex items-center gap-x-1'>
        {new Array(Math.floor(value)).fill(1).map((el: any, index: number) => {
          return <StarIcon className={`h-8 w-8`} fill={color ? color : '#EEB012'} />
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
                    <h5>Sku: </h5>
                    <p></p>
                  </div>

                  {/* product category */}
                  <div className='grid grid-cols-productSlug'>
                    <h5>Categories:</h5>
                    <p>console, games, game</p>
                  </div>

                  {/* product brand */}
                  <div className='grid grid-cols-productSlug'>
                    <h5>
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



                <div className='py-4'>
                  <p className='text-[2rem] font-bold lg:text-[3rem] '>NGN 140,000</p>
                </div>

                <div className='flex items-center gap-x-2 py-4'>
                  <span className='text-lg font-medium'>Quantity</span>
                  <div className='flex items-center text-[1.4rem]'>
                    <button className='border py-2 px-4'>+</button>
                    <p className='border-t border-b py-2 px-4'>1</p>
                    <button className='border py-2 px-4'>-</button>
                  </div>
                </div>

                <div className='flex items-center gap-x-8 py-4'>
                  <button className='h-fit w-fit rounded-md bg-primary-blue-300 px-4 py-2 font-semibold text-white'>
                    Buy now
                  </button>

                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#D1D5DB]'>
                    <HeartIcon className='h-8 w-8' />
                  </div>
                </div>
              </article>
            </section>
          </div>

          {/* product breakdown tab */}
          <div className='col-span-full col-start-2 col-end-12 bg-primary-grey-500 py-2'>
            <section>
              <div className='grid grid-cols-6 px-4 border-b py-4'>
                <div>
                  <h2
                    id='overview'
                    className={`${styles.tabHeader} ${
                      selectedTab === 'overview' ? 'text-primary-link' : ''
                    }`}
                    onClick={handleSelectedTab}
                  >
                    Overview
                  </h2>
                </div>
                <div>
                  <h2
                    id='description'
                    className={`${styles.tabHeader} ${
                      selectedTab === 'description' ? 'text-primary-link' : ''
                    }`}
                    onClick={handleSelectedTab}
                  >
                    Description
                  </h2>
                </div>
                <div>
                  <h2
                    id='shipping'
                    className={`${styles.tabHeader} ${
                      selectedTab === 'shipping' ? 'text-primary-link' : ''
                    }`}
                    onClick={handleSelectedTab}
                  >
                    Shipping
                  </h2>
                </div>
                <div>
                  <h2
                    id='warranty'
                    className={`${styles.tabHeader} ${
                      selectedTab === 'warranty' ? 'text-primary-link' : ''
                    }`}
                    onClick={handleSelectedTab}
                  >
                    Warranty
                  </h2>
                </div>
                <div>
                  <h2
                    id='returnPolicy'
                    className={`${styles.tabHeader} ${
                      selectedTab === 'returnPolicy' ? 'text-primary-link' : ''
                    }`}
                    onClick={handleSelectedTab}
                  >
                    Return policy
                  </h2>
                </div>
                <div>
                  <h2
                    id='reviews'
                    className={`${styles.tabHeader} ${
                      selectedTab === 'reviews' ? 'text-primary-link' : ''
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
