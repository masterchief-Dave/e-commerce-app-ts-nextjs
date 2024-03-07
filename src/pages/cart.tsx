import Link from 'next/link'
import CheckoutProduct from '@/components/CheckoutProduct'
import { Layout } from '@/components/Layout'
import { Navbar } from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import AuthenticatedModal from '@/components/Modal/AuthenticatedModal'
import { useGetCart } from "@/lib/hooks/user/user.hook"
import { CartSkeleton } from "@/components/skeleton"
import type { CartProducts } from "@/lib/types/user/user.type"

type Props = {}

const Cart = (props: Props) => {
  const { data, isLoading } = useGetCart()

  console.log(data)

  return (
    <Layout>
      <div>
        <Navbar />
        <main className='grid grid-cols-12  '>
          <section className='col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-12 py-16'>
            <h1 className='text-[2rem] font-bold uppercase'>Cart</h1>
            {/* cart product design layout and design*/}
            {isLoading ? (
              <div className="flex flex-col">
                {new Array(3).fill(3).map((_, index) => {
                  return <CartSkeleton key={index + 1} />
                })}
              </div>
            ) : data && data.data.length >= 1 ? <ItemInCart cart={data.products} /> : <NoItemInCart />}

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

const ItemInCart = ({ cart }: { cart: CartProducts[] }) => {

  const router = useRouter()
  const [openModal, setOpenModal] = useState(false)

  const totalPrice = 0

  const handleProceedToCheckout = () => {
    // if (user === 'unauthenticated') {
    //   // bring up auth modal and save the redirect because the user should be redirected to the /checkout page
    //   return setOpenModal(true)
    // }

    router.push('/checkout')
  }

  console.log({ cart })

  return (
    <>
      <div className='px-12'>
        {cart?.map((item: CartProducts) => {
          return (
            <CheckoutProduct
              key={item._id}
              id={item._id}
              img={item.images[0].url}
              name={item.name}
              price={item.price}
              cartQuantity={item.quantity}
              stock={item.stock}
            />)
        })}
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

