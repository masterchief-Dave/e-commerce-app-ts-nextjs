import { CheckIcon } from '@heroicons/react/24/outline'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/assets/celebrate.svg'

const OrderSummary = () => {
  return (
    <div className=''>
      <Head>
        <title>Thank you! - Apple</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='grid grid-cols-12 min-h-screen'>
        <section className='col-start-1 col-end-8 py-32 px-24 space-y-12'>
          <h1 className='text-[2.5rem] font-bold'>Sage-Warehouse</h1>
          <div className='flex gap-x-12'>
            <div className='h-20 w-20 flex items-center justify-center rounded-full border border-black'>
              <CheckIcon className='h-14 w-14' />
            </div>
            <div className=''>
              <h3 className='font-medium text-[1.6rem]'>Thank You!</h3>
              <div className='flex items-center gap-x-2'>
                <p className='font-medium text-[1.6rem]'>Order</p>
                <span className='text-[1.4rem] text-primary-grey-300'>#</span>
              </div>
            </div>
          </div>

          <div className='border rounded-xl p-6 divide-y'>
            <div className='space-y-4 py-6'>
              <h3 className='text-[1.4rem] text-primary-grey-300 font-medium'>Your order is confirmed</h3>
              <p className='text-[1.4rem]'>We've accepted your order, and we're getting it ready. Come back to this page for updates on your shipment status.</p>
            </div>
            <div className='py-6 space-y-4'>
              <h3 className='text-[1.4rem] font-medium text-primary-grey-300'>Order Tracking Number</h3>
              <p></p>
            </div>
          </div>

          <div className='border rounded-xl space-y-4 p-6'>
            <h3 className='text-[1.4rem] font-medium text-primary-grey-300'>Order updates</h3>
            <p className='text-[1.4rem]'>You'll get shipping and delivery updates by email and text.</p>
          </div>

          <div className='flex items-center justify-between'>
            <div className='text-[1.4rem] gap-x-1 font-medium flex items-center'>
              <p>Need help?</p>  <p className='text-blue-500'>Contact us</p>
            </div>
            <Link href='/' className='h-[4rem] flex items-center justify-center text-[1.4rem] font-medium bg-blue-500 rounded-md px-8 py-2 text-white'>Continue Shopping</Link>
          </div>
        </section>
        <section className='col-start-8 col-end-13 py-32 px-24 bg-[#FAFAFA] sticky top-0 left-0 right-0'>
          <div className='flex items-center justify-center mb-12'>
            <Image src={Logo} className='object-cover' alt='success' />
          </div>

          <div className='col-start-3 col-end-11'>
            <h2 className='mb-8 text-[2rem] font-bold'>Summary</h2>
            <article className='mb-[5rem] space-y-8'>
              <div className='border-b space-y-3 py-4'>
                <div className='text-former-price-text flex justify-between'>
                  <p className='text-base lg:text-[1.2rem] text-primary-grey-300'>Original Price</p>
                  <p className='text-[1.5rem] font-semibold'> ${200.00}</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-base lg:text-[1.2rem] text-primary-grey-300'>Shipping</p>
                  <p className='text-[1.5rem] font-semibold'>${200.00}</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='text-base lg:text-[1.2rem] text-primary-grey-300'>Tax</p>
                  <p className='text-[1.5rem] font-semibold'>${200.00}</p>
                </div>
              </div>

              <div className='flex justify-between'>
                <p className='text-base lg:text-[1.2rem] text-primary-grey-300'>Total</p>
                <p className='text-[1.5rem] font-semibold'>200.00</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default OrderSummary

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {}
// }