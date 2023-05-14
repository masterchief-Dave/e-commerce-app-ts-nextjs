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
import { partnersData } from '@/globals/partners'
import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { Layout } from '@/components/Layout'
import useMediaQuery from '@/hooks/useMediaQuery'

export default function Home() {
  const isAboveMediaQuery = useMediaQuery('(min-width: 1060px)')

  const styles = {
    productContainer: `flex justify-center`,
  }

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

                <section className='products-component bg-white py-12'>
                  <section className='flex justify-center px-8'>
                    <div className='grid w-full grid-cols-1 justify-center gap-x-8 gap-y-20 md:grid-cols-2 xl:grid-cols-4'>
                      {[0, 0, 0, 0, 0, 0, 0].map((data, index) => {
                        return (
                          <div className={styles.productContainer} key={index}>
                            <ProductCard
                              img={''}
                              productName='Apple watch series 5'
                              productPrice='$500'
                            />
                          </div>
                        )
                      })}
                    </div>
                  </section>
                </section>
              </div>
            </div>

            <section className='company-component col-span-full mx-auto w-full max-w-[144rem] bg-white py-12'>
              <section className='flex items-center justify-center gap-8 px-8 py-20'>
                <div className='grid grid-cols-12'>
                  <div className='col-start-2 col-end-12 flex justify-center'>
                    {partnersData.map((data, index) => {
                      return (
                        <div className={styles.productContainer} key={index}>
                          <Image
                            src={data.img}
                            alt='moten-image'
                            className='h-[6rem] object-contain'
                            width={1000}
                            height={1000}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>
            </section>
          </main>
          <Footer />
        </>
      </Layout>

      <ShoppingFixedBag />
    </>
  )
}
