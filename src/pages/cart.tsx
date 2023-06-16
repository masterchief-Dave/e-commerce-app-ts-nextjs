import { RootState } from '@/app/store'
import CheckoutProduct from '@/components/CheckoutProduct'
import { Layout } from '@/components/Layout'
import { Navbar } from '@/components/Navbar'
import { useCart } from '@/hooks/useCart'
import { useRouter } from 'next/router'

type Props = {}

const Cart = (props: Props) => {
  const { cart } = useCart()


  if (cart.length < 1) {
    return <NoItemInCart />
  }

  return (
    <Layout>
      <div>
        <Navbar />
        <main className='grid grid-cols-12  font-inter'>
          <section className='col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-12 py-16'>
            <h1 className='text-[2rem] font-black uppercase'>Cart</h1>

            {/* cart product design layout and design*/}
            <div className='px-12'>
              {cart.map((item) => {
                return (
                  <CheckoutProduct
                    key={item._id}
                    id={item._id}
                    img={item.images[0].url}
                    name={item.name}
                    price={item.price}
                    cartQuantity={item.cartQuantity}
                  />)
              })}
            </div>

            <section className='ml-auto max-w-3xl space-y-8 px-12 text-xl font-normal lg:text-2xl'>
              <div className='space-y-4 border-b'>
                <div className='flex items-center justify-between'>
                  <p>Subtotal</p>
                  <p>$4000</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p>Shipping</p>
                  <p>0.00</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p>Tax</p>
                  <p>0</p>
                </div>
              </div>

              <div className='flex items-center justify-between font-semibold'>
                <p>Total</p>
                <p>$6000</p>
              </div>

              <button className='rounded-md bg-primary-blue-500 px-24 py-4 text-[1rem] font-semibold text-white hover:bg-primary-blue-300 lg:text-[1.4rem]'>
                Proceed to checkout
              </button>
            </section>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default Cart

const NoItemInCart = () => {
  const router = useRouter()

  return (
    <div>
      <Navbar />
      <main className='grid grid-cols-12'>
        <section className='col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-12 py-16'>
          <h1 className='font-matter text-[2rem] font-black uppercase'>Cart</h1>
          <div className='w-[30rem] space-y-8 rounded-[1rem] border bg-[#dedede] p-12'>
            <h1 className='text-1xl font-semibold lg:text-2xl'>
              Your shopping cart is empty
            </h1>

            <button
              className='h-fit w-fit rounded-md bg-primary-black-100 px-4 py-2 text-[1.4rem] font-semibold text-white'
              onClick={() => router.push('/')}
            >
              Continue Shopping
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
