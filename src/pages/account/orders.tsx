import { useState } from 'react'
import { Order } from '@/components/Account/Order/order'
import { AccountLayout } from '@/components/Layout/Account'
import { GetServerSideProps } from 'next'
import { fetchDataFromExpressServer, fetchOrder } from '@/utils/fetchOrder'
import { useGetUserOrders } from "@/lib/hooks/user/user.hook"
import { OrderSkeleton } from "@/components/skeleton"

type Props = {
  orders: null
}

const Orders = ({ orders }: Props) => {
  const { data, isLoading } = useGetUserOrders()

  return (
    <div>
      <AccountLayout>
        <div>
          <header className='border-b p-8'>
            <h1 className='font-semibold text-3xl'>My Orders</h1>
          </header>

          {isLoading ? (
            <OrderSkeleton />
          ) : (
            <section className='max-h-[50rem] divide-y overflow-y-auto'>
              {data?.map((order) => {
                return (
                  <Order
                    key={order._id as unknown as string}
                    address={order.shippingInfo.address}
                    date={order.createdAt}
                    orderNo={order.orderStatus}
                    price={order.totalPrice.toString()}
                    orderItems={order.orderItems}
                  />
                )
              })}
            </section>
          )}
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