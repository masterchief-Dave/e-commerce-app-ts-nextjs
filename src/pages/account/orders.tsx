import { useState } from 'react'
import { Order } from '@/components/Account/Order/order'
import { AccountLayout } from '@/components/Layout/Account'
import { GetServerSideProps } from 'next'
import { fetchDataFromExpressServer, fetchOrder } from '@/utils/fetchOrder'
import { useGetUserOrders } from "@/lib/hooks/user/user.hook"

type Props = {
  orders: null
}

const Orders = ({ orders }: Props) => {
  const { data, isLoading } = useGetUserOrders()
  const [step, setStep] = useState(1)
  console.log('user orders', data)

  return (
    <div>
      <AccountLayout>
        <div>
          <header className='border-b p-8'>
            <h1 className='font-semibold text-3xl'>My Orders</h1>
          </header>

          <section className='max-h-[50rem] divide-y overflow-y-auto'>
            {data?.map((order) => {
              // console.log({order})
              return (
                <Order
                  key={order._id as unknown as string}
                  address={order.shippingInfo.address}
                  date={''}
                  orderNo={order.orderStatus}
                  price={order.totalPrice.toString()}
                  image=""
                />
              )
            })}
          </section>
        </div>
      </AccountLayout>
    </div>
  )
}

export default Orders

/*
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  try {
    const orders = await fetchOrder(context.req)

    return {
      props: {
        orders: orders
      }
    }

    // api calling express server

  } catch (err) {
    return {
      props: {
        orders: null
      }
    }
  }
}
*/