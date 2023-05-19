import { Navbar } from '@/components/Navbar'

const Checkout = () => {
  const styles = {
    sectionHeader: `font-semibold text-[1rem] lg:text-[1.8rem]`,
    priceHeader: `font-medium lg:text-[1.4rem] text-[0.8rem]`,
    priceText: `font-normal lg:text-[1.4rem] text-[0.8rem]`
  }

  return (
    <div>
      <Navbar />
      <div className='grid grid-cols-12 font-inter'>
        <div className='col-start-1 col-end-8 grid grid-cols-12 py-24'>
          <div className='col-start-2 col-end-12 space-y-12 p-2'>
            <h1 className='text-[2rem] font-bold'>Checkout</h1>
            <div className='space-y-12'>
              <h2 className={styles.sectionHeader}>Billing Address</h2>
            </div>

            <div className='space-y-12'>
              <h2 className={styles.sectionHeader}>Payment Method</h2>
            </div>
          </div>
        </div>
        <div className='col-start-8 col-end-13 grid grid-cols-12 bg-[#f7f9fa] py-24'>
          <div className='col-start-4 col-end-10 space-y-12 py-12 sticky top-0'>
            <h1 className='hidden text-[2rem] font-bold'>Checkout</h1>
            <h2 className={styles.sectionHeader}>Summary</h2>

            <div className='space-y-8 divide-y'> 
              <div className='space-y-8'>
                <div className='grid grid-cols-12'>
                  <h4 className={`col-start-1 col-end-8 ${styles.priceHeader}`}>Original price</h4>
                  <p className={`col-start-8 col-end-13 ${styles.priceText}`}>$2000</p>
                </div>

                <div className='grid grid-cols-12'>
                  <h4 className={`col-start-1 col-end-8 ${styles.priceHeader}`}>Discounts</h4>
                  <p className={`col-start-8 col-end-13 ${styles.priceText}`}>$200</p>
                </div>
              </div>

              <div className='font-bold grid grid-cols-12 lg:text-[1.4rem] text-[1rem] py-4'>
                <h4 className='col-start-1 col-end-8'>Total</h4>
                <p className=''>$1800</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
