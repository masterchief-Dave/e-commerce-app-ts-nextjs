import { useSelector } from 'react-redux'
import { LockClosedIcon } from '@heroicons/react/24/solid'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Navbar } from '@/components/Navbar'
import PaymentAccordion from '@/components/Accordion/paymentAccordion'
import { BillingAddress } from '@/components/Accordion/billingAddressAccordion'
import { PaystackHook } from '@/helpers/paystack'
import { useCart } from '@/hooks/useCart'
import { RootState } from '@/app/store'
import { selectorCartTotalAmount } from '@/features/cart/cartSlice'


const Checkout = () => {
  const styles = {
    sectionHeader: `font-semibold text-[1.3rem] lg:text-[1.8rem]`,
    priceHeader: `font-medium lg:text-[1.4rem] text-[0.8rem]`,
    priceText: `font-normal lg:text-[1.4rem] text-[0.8rem]`,
  }

  const { cart } = useCart()

  const totalPrice = useSelector((state: RootState) => {
    return selectorCartTotalAmount(state)
  })

  // console.log({ totalPrice })
  const shippingFee = 10
  const taxFee = 10
  const amount = totalPrice + shippingFee + taxFee

  // handle the form for the billingAddress 
  const billingAddressformik = useFormik<BillingAddress>({
    initialValues: {
      title: '',
      firstname: '',
      lastname: '',
      addressLine1: '',
      addressLine2: '',
      country: '',
      zipcode: '',
      default: false
    },
    validationSchema: Yup.object({
      title: Yup.string().required(''),
      firstname: Yup.string().required(),
      lastname: Yup.string().required(),
      addressLine1: Yup.string().required(),
      country: Yup.string().required(),
      zipcode: Yup.string().required()
    }),
    onSubmit: (values, formikHelpers) => { }
  })

  console.log(billingAddressformik.values)

  return (
    <div>
      <Navbar />
      <div className='relative grid grid-cols-12 font-inter'>
        <div className='col-start-1 col-end-13 grid grid-cols-12 py-24 md:col-start-1 md:col-end-8'>
          <div className='col-start-2 col-end-12 space-y-12 p-2'>
            <h1 className='text-[2rem] font-bold'>Checkout</h1>
            <div className='space-y-4'>
              <h2 className={styles.sectionHeader}>Billing Address</h2>
              <BillingAddress
                title={billingAddressformik.values.title}
                firstname={billingAddressformik.values.firstname}
                lastname={billingAddressformik.values.lastname}
                addressLine1={billingAddressformik.values.addressLine1}
                addressLine2={billingAddressformik.values.addressLine2}
                country={billingAddressformik.values.country}
                zipcode={billingAddressformik.values.zipcode}
                onChange={billingAddressformik.handleChange}
              />
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
                <div className='border-b space-y-3 py-4'>
                  <div className='text-former-price-text flex justify-between'>
                    <p className='text-base lg:text-[1.2rem]'>Original Price</p>
                    <p className='text-[1.5rem] font-semibold'> ${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p className='text-base lg:text-[1.2rem]'>Shipping</p>
                    <p className='text-[1.5rem] font-semibold'>${shippingFee.toFixed(2)}</p>
                  </div>
                  <div className='flex items-center justify-between'>
                    <p className='text-base lg:text-[1.2rem]'>Tax</p>
                    <p className='text-[1.5rem] font-semibold'>${taxFee.toFixed(2)}</p>
                  </div>
                </div>

                <div className='flex justify-between'>
                  <p className='text-base lg:text-[1.2rem]'>Total</p>
                  <p className='text-[1.5rem] font-semibold'>${amount}</p>
                </div>

                <p className='text-former-price-text font-light'>
                  By completing your purchase you agree to these Cobraine term
                  and condition
                </p>

                <PaystackHook price={20000} orders={cart} loading={false} />

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
