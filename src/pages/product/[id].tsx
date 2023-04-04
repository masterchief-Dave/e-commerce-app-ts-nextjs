import Image from 'next/image'
import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from '@/components/Navbar'
import Link from 'next/link'
import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Layout } from '@/components/Layout'

type Props = {}

const ProductSlug = (props: Props) => {
  return (
    <Layout>
      <>
        <Navbar />
        <main className='mx-auto grid w-full grid-cols-12 space-y-12 font-matter'>
          <div className='col-span-full'>
            <BreadCrumb />
          </div>

          <div className='col-span-full col-start-2 col-end-12 space-y-12'>
            <h1 className='text-xl font-black uppercase lg:text-2xl'>
              Play station 4
            </h1>

            <section className='grid grid-cols-12'>
              <div className='col-start-1 col-end-6'>
                <Image
                  src='/assets/img/ps4-1.png'
                  alt='play station 4'
                  width={1000}
                  height={1000}
                  className='object-cover'
                />
              </div>

              <article className='col-start-7 col-end-13 space-y-4 divide-y'>
                <h1 className='text-xl font-black lg:text-2xl'>
                  Sony Playstation 4 consoles
                </h1>
                <div className='py-4 text-sm lg:text-lg'>
                  <p>
                    Product Code:{' '}
                    <span className='text-primary-grey-100'>524162</span>
                  </p>
                  <p>
                    Brand:{' '}
                    <span>
                      <Link href='#' className='text-text-primary-link'>
                        Sony
                      </Link>
                    </span>
                  </p>
                </div>

                <div className='py-4'>
                  <p className='text-xl font-black lg:text-3xl '>#140,000</p>
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

          <div className='col-span-full col-start-2 col-end-12'>
            <section className='grid grid-cols-6'>
              <div>
                <h2 id='overview'>Overview</h2>
              </div>
              <div>
                <h2 id='description'>Description</h2>
              </div>
              <div>
                <h2 id='shipping'>Shipping</h2>
              </div>
              <div>
                <h2 id='warranty'>Warranty</h2>
              </div>
              <div>
                <h2 id='returnPolicy'>Return policy</h2>
              </div>
              <div>
                <h2 id='reviews'>Reviews</h2>
              </div>
            </section>
          </div>
        </main>
        <ShoppingFixedBag />
      </>
    </Layout>
  )
}

export default ProductSlug
