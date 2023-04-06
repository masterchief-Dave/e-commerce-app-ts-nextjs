import { OrderDetails } from '@/components/Account/Order/orderDetails'
import { AccountLayout } from '@/components/Layout/Account'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

type Props = {}

const OrderSlug = (props: Props) => {
  const router = useRouter()

  return (
    <div>
      <AccountLayout>
        <div>
          <header className='border-b p-8'>
            <button
              className='flex items-center gap-x-4'
              onClick={() => {
                router.push('/account/orders')
              }}
            >
              <ArrowLeftIcon className='h-6 w-6' />
              <h1 className='text-xl font-black lg:text-2xl'>Order Details</h1>
            </button>
          </header>

          <div className='p-8 text-[1.4rem]'>
            <OrderDetails />
          </div>
        </div>
      </AccountLayout>
    </div>
  )
}

export default OrderSlug
