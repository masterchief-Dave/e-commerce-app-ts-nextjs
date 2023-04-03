import { Navbar } from '@/components/Navbar'
import { useRouter } from 'next/router'

type Props = {}

const cart = (props: Props) => {
  return (
    <div>
      <Navbar />
      <main className='grid grid-cols-12'>
        <section className='col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-12 py-16'>
          <h1 className='font-matter text-[2rem] font-black uppercase'>Cart</h1>

          <div>
            <NoItemInCart />
          </div>
        </section>
      </main>
    </div>
  )
}

export default cart

const NoItemInCart = () => {
  const router = useRouter()

  return (
    <section className='w-[30rem] space-y-8 rounded-[1rem] border bg-[#dedede] p-12'>
      <h1 className='text-1xl font-semibold lg:text-2xl'>
        Your shopping cart is empty
      </h1>

      <button
        className='h-fit w-fit rounded-md bg-primary-black-100 px-4 py-2 text-[1.4rem] font-semibold text-white'
        onClick={() => router.push('/')}
      >
        Continue Shopping
      </button>
    </section>
  )
}
