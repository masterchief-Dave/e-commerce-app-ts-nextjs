import { useState } from 'react'
import { Order } from '@/components/Account/Order/order'
import { AccountLayout } from '@/components/Layout/Account'
import { GetServerSideProps } from 'next'
import { fetchDataFromExpressServer, fetchOrder } from '@/utils/fetchOrder'

type Props = {
  orders: IOrder[] | null
}

const Orders = ({orders}: Props) => {
  const [step, setStep] = useState(1)
  console.log(orders)
 
  return (
    <div>
      <AccountLayout>
        <div>
          <header className='border-b p-8'>
            <h1 className='text-xl font-bold lg:text-2xl'>My Orders</h1>
          </header>

          <section className='max-h-[50rem] divide-y overflow-y-auto'>
            {/* {orders?.map((order) => {
              // console.log({order})
              return  <Order />
            })}
            */}
         
          </section>
        </div>
      </AccountLayout>
    </div>
  )
}

export default Orders
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  try{
    const orders = await fetchOrder(context.req)
    
    return {
      props: {
        orders: orders
      }
    }

    // api calling express server
  
  }catch(err){
    return {
      props: {
        orders: null
      }
    }
  }
}