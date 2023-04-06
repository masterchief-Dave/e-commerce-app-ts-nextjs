import { Order } from '@/components/Account/Order/order'
import { AccountLayout } from '@/components/Layout/Account'

const Orders = () => {
  return (
    <div>
      <AccountLayout>
        <div>
          <header className='border-b p-8'>
            <h1 className='text-xl font-black lg:text-2xl'>My Orders</h1>
          </header>

          <section className='max-h-[50rem] divide-y overflow-y-auto'>
            <Order />
            <Order />
            <Order />
          </section>
        </div>
      </AccountLayout>
    </div>
  )
}

export default Orders
