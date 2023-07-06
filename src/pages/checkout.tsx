import { Navbar } from '@/components/Navbar'
import PaymentAccordion from '@/components/Accordion/paymentAccordion'
import { BillingAddress } from '@/components/Accordion/billingAddressAccordion'
import { LockClosedIcon } from '@heroicons/react/24/solid'

const Checkout = () => {
  const styles = {
    sectionHeader: `font-semibold text-[1.3rem] lg:text-[1.8rem]`,
    priceHeader: `font-medium lg:text-[1.4rem] text-[0.8rem]`,
    priceText: `font-normal lg:text-[1.4rem] text-[0.8rem]`,
  }

  return (
    <div>
      <Navbar />
      <div className='relative grid grid-cols-12 font-inter'>
        <div className='col-start-1 col-end-13 grid grid-cols-12 py-24 md:col-start-1 md:col-end-8'>
          <div className='col-start-2 col-end-12 space-y-12 p-2'>
            <h1 className='text-[2rem] font-bold'>Checkout</h1>
            <div className='space-y-4'>
              <h2 className={styles.sectionHeader}>Billing Address</h2>
              <BillingAddress />
            </div>

            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <h3 className={styles.sectionHeader}>Payment methods</h3>
                <div className='flex items-center gap-8'>
                  <p>Secured Connection</p>
                  <LockClosedIcon className='h-8 w-8' />
                </div>
              </div>

              <div>
                <PaymentAccordion />
              </div>
            </div>

            <div className='space-y-4'>
              <h2 className={styles.sectionHeader}>Order Details</h2>
            </div>
          </div>
        </div>
        <div className='relative col-start-1 col-end-13 bg-[#F3F6F8] p-4 md:col-start-8 md:col-end-13'>
          <div className='sticky top-[10rem] grid grid-cols-12 py-[5rem]'>
            <div className=' col-start-3 col-end-11 lg:w-[30rem] lg:max-w-[30rem]'>
              <h2 className='mb-8 text-[2rem] font-bold'>Summary</h2>
              <article className='mb-[5rem] space-y-8'>
                <div className='text-former-price-text flex justify-between border-b py-4'>
                  <p className='text-base lg:text-[1.2rem]'>Original Price</p>
                  <p className='text-[1.5rem] font-semibold'>NGN 230,000</p>
                </div>

                <div className='flex justify-between'>
                  <p className='text-base lg:text-[1.2rem]'>Total</p>
                  <p className='text-[1.5rem] font-semibold'>NGN 230,000</p>
                </div>

                <p className='text-former-price-text font-light'>
                  By completing your purchase you agree to these Cobraine term
                  and condition
                </p>

                <button className='h-[4rem] w-full bg-primary-blue-500 text-[1.4rem] font-semibold text-white transition-all delay-75 hover:bg-primary-blue-300'>
                  Complete Checkout
                </button>

                <div className='flex items-center gap-x-8'>
                  <p className='text-former-price-text w-full text-center text-[1.3rem]'>
                    30 days money back guarantee
                  </p>

                  <LockClosedIcon className='h-8 w-8' />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
