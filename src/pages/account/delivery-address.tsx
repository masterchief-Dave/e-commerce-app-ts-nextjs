import { Footer } from '@/components/Footer'
import { AccountLayout } from '@/components/Layout/Account'

type Props = {}

const DeliveryAddress = (props: Props) => {
  return (
    <div>
      <AccountLayout>
        <div>
          <header className='flex items-center justify-between border-b p-8'>
            <h1 className='text-xl font-black lg:text-2xl'>Delivery Address</h1>

            <button
              className='h-fit w-fit rounded-md bg-primary-red-100 px-4 py-2 text-[1.4rem] font-semibold text-white'
              id='newAddress'
            >
              {' '}
              Add new Address{' '}
            </button>
          </header>
        </div>
      </AccountLayout>
      <Footer />
    </div>
  )
}

export default DeliveryAddress
