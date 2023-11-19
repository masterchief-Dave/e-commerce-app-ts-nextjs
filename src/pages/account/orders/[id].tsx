import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

import { OrderDetails } from '@/components/Account/Order/orderDetails'
import { AccountLayout } from '@/components/Layout/Account'
import { fetchOrder } from '@/utils/fetchOrder'

type Props = {
  order: IOrder[] | null
}

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
              <h1 className='text-xl font-bold lg:text-2xl'>Order Details</h1>
            </button>
          </header>

          <div className='p-8 text-[1.6rem]'>
            <OrderDetails />
          </div>
        </div>
      </AccountLayout>
    </div>
  )
}

export default OrderSlug

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  try {
    const data = await fetchOrder(context.req)

    return {
      props: {
        order: data
      }
    }
  } catch (err) {
    return {
      props: {
        order: null
      }
    }
  }
}