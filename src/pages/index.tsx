import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { DropdownNav } from '@/components/Dropdown'
import { Header } from '@/components/Header'
import { WeeklyDeals } from '@/components/Deals'
import { Footer } from '@/components/Footer'
import { electronicsData, gamingData, computerData } from '@/globals/category'
import { CategoryCard } from '@/components/Category/Card'
import { ProductCard } from '@/components/Product/Card'

import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { Layout } from '@/components/Layout'
import useMediaQuery from '@/hooks/useMediaQuery'
import useSWR from 'swr'
import { fetchProducts } from '@/features/fetchProducts'
import { ProductCardSkeleton } from '@/components/SkeletonLoading'

export default function Home() {
  const [pageIndex, setPageIndex] = useState<number>(1)

  //{{url}}/products?page=1

  //const { data: user } = useSWR(['/api/user', token], ([url, token]) => fetchWithToken(url, token))

  // https://sage-warehouse-backend.onrender.com/api/v1/products?page=${page}

  // const {
  //   data,
  //   error: productError,
  //   isLoading,
  // } = useSWR([`/api/products/getProducts`, pageIndex], ([url, pageIndex]) =>
  //   fetchProducts(pageIndex)
  // )

  const {
    data,
    error: productError,
    isLoading,
  } = useSWR(
    [
      `https://sage-warehouse-backend.onrender.com/api/v1/products?page=${pageIndex}`,
      pageIndex,
    ],
    ([url, pageIndex]) => fetchProducts(pageIndex)
  )

  const styles = {
    productContainer: `flex justify-center`,
  }

  const handlePrevButton = () => {
    if (pageIndex === 1) {
      return
    }
    setPageIndex((prev) => prev - 1)
  }

  const handleNextButton = () => {
    if (pageIndex === 5) {
      return
    }

    setPageIndex((prev) => prev + 1)
  }

  // console.log({ pageIndex })

  return (
    <>
      <Head>
        <title>Sage-Warehouse</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <>
          <Navbar />
          <DropdownNav />
          <Header />
          <main className='grid grid-cols-12 space-y-12 bg-primary-white py-12'>
            <div className='col-span-full mx-auto grid w-full grid-cols-12'>
              <div className='col-start-2 col-end-12 space-y-12'>
                <section>
                  <h2 className='mb-8 font-inter text-base font-bold uppercase text-primary-black-200 lg:text-[2rem]'>
                    Product Categories
                  </h2>
                  <div className='flex flex-col items-center justify-between gap-8 lg:flex-row lg:flex-wrap'>
                    <CategoryCard data={electronicsData} />
                    <CategoryCard data={computerData} />
                    <CategoryCard data={gamingData} />
                  </div>
                </section>

                <section className='weekly-deals-component  bg-white'>
                  <WeeklyDeals />
                </section>

                <section className='products-component space-y-12 bg-white py-12'>
                  {productError ? (
                    <p className='px-8 font-inter text-2xl font-medium text-primary-grey-300'>
                      Error fetching products at this time try again later 😞
                    </p>
                  ) : (
                    <section className='flex justify-center px-8'>
                      <div className='grid w-full grid-cols-1 justify-center gap-x-8 gap-y-20 md:grid-cols-2 xl:grid-cols-4'>
                        {isLoading
                          ? new Array(8).fill(2).map((_, index) => {
                              return <ProductCardSkeleton key={index} />
                            })
                          : data?.data.products.map(
                              (product: Product, index: number) => {
                                return (
                                  <div
                                    key={product._id}
                                    className={styles.productContainer}
                                  >
                                    <ProductCard data={product} />
                                  </div>
                                )
                              }
                            )}
                      </div>
                    </section>
                  )}

                  <div className='flex items-center justify-end gap-x-4 px-8'>
                    <button
                      className='rounded-md border px-8 py-2 text-xl font-medium lg:text-[1.4rem]'
                      onClick={() => handlePrevButton()}
                    >
                      Prev
                    </button>
                    <button className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-blue-300 text-xl font-medium text-white lg:text-[1.4rem]'>
                      {pageIndex}
                    </button>
                    <button className='text-xl font-medium lg:text-[1.4rem]'>
                      {pageIndex + 1}
                    </button>
                    <p>...</p>
                    <button className='text-xl font-medium lg:text-[1.4rem]'>
                      10
                    </button>
                    <button
                      className='rounded-md border px-8 py-2 text-xl font-medium lg:text-[1.4rem]'
                      onClick={() => handleNextButton()}
                    >
                      Next
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </main>
          <Footer />
        </>
      </Layout>

      <ShoppingFixedBag />
    </>
  )
}
