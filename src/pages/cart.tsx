import Link from 'next/link'
import { useSelector } from 'react-redux'

import { RootState } from '@/app/store'
import CheckoutProduct from '@/components/CheckoutProduct'
import { Layout } from '@/components/Layout'
import { Navbar } from '@/components/Navbar'
import { useCart } from '@/lib/hooks/useCart'
import { selectorCartTotalAmount } from '@/features/cart/cartSlice'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import AuthenticatedModal from '@/components/Modal/AuthenticatedModal'
import { useSearchParams } from 'next/navigation'
import { useGetCart } from "@/lib/hooks/user/user.hook"

type Props = {}

const Cart = (props: Props) => {
  const { data } = useGetCart()

  console.log(data)

  return (
    <Layout>
      <div>
        <Navbar />
        <main className='grid grid-cols-12  '>
          <section className='col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-12 py-16'>
            <h1 className='text-[2rem] font-bold uppercase'>Cart</h1>
            {/* cart product design layout and design*/}
            {data && data?.data?.length >= 1 ? <ItemInCart cart={data.data} /> : <NoItemInCart />}
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default Cart

const NoItemInCart = () => {
  return (
    <div>
      <main className='grid grid-cols-12'>
        <section className='col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-12 py-16'>
          <div className='w-[30rem] space-y-8 rounded-[1rem] border bg-[#dedede] p-12'>
            <h1 className='text-1xl font-semibold lg:text-2xl'>
              Your shopping cart is empty
            </h1>

            <Link
              className='h-fit flex items-center justify-center w-fit rounded-md bg-primary-black-100 px-4 py-2 text-[1.6rem] font-semibold text-white'
              href='/'
            >
              Continue Shopping
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

const ItemInCart = ({ cart }: { cart: string[] }) => {
  const session = useSession()
  const router = useRouter()
  const [openModal, setOpenModal] = useState(false)

  const totalPrice = useSelector((state: RootState) => {
    return selectorCartTotalAmount(state)
  })

  const handleProceedToCheckout = () => {
    if (session.status === 'unauthenticated') {
      // bring up auth modal and save the redirect because the user should be redirected to the /checkout page
      return setOpenModal(true)
    }

    router.push('/checkout')
  }

  /**
   * in this cart page move all the items in my cart to the url query params style, and then when a user clicks on the auth link and the page refreshes the content of the cart can be retrieved from the url search params and the user can proceed to checkout
   */

  return (
    <>
      <div className='px-12'>
        {/* {cart.map((item: Cart) => {
          return (
            <CheckoutProduct
              key={item._id}
              id={item._id}
              img={item.images[0].url}
              name={item.name}
              price={item.price}
              cartQuantity={item.cartQuantity}
            />)
        })} */}
      </div>
      <section className='ml-auto max-w-3xl space-y-8 px-12 text-xl font-normal lg:text-2xl'>
        <div className='flex items-center justify-between font-semibold'>
          <p>Total</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <Button
          onClick={handleProceedToCheckout}
          className='rounded-md flex items-center justify-center h-[5rem] bg-primary-blue-500 px-24 py-4 text-[1rem] font-semibold text-white hover:bg-primary-blue-300 lg:text-[1.6rem]'>
          Proceed to checkout
        </Button>
      </section>
      {openModal && <AuthenticatedModal openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  )
}
