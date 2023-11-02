import { removeItem } from '@/features/cart/cartSlice'
import { useAppDispatch } from '@/hooks/reduxhooks'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { usePaystackPayment } from 'react-paystack'

// type Props = {
//   loading: boolean
//   orders: Product[]
//   price: string
// }

const config = {
  reference: new Date().getTime().toString(),
  email: 'bodunrindavidbond@gmail.com',
  amount: 20000,
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_API,
  currency: 'NGN',
  language: 'English'
}

const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

export const PaystackHook = ({ loading, orders, price, shippingAddress, isDisabled = true }) => {
  const router = useRouter()
  const amountToPay = parseFloat(price) * 100
  const session = useSession()
  const dispatch = useAppDispatch()

  const userId = session?.data?.id

  // console.log(userId)

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    // console.log(reference)
    try {
      // `http://localhost:8100/api/v1/payment/checkout-session/${reference?.reference}`
      axios.post(`/api/order/create-order`, {
        orders,
        reference,
        userId,
        shippingAddress,
        price,
        shippingPrice: 10,
        taxPrice: 10,
        // route to the place where u will see your order summary
      }).then((data) => {
        //  remove the item from the cart
        console.log('orders made', orders)
        console.log('get the product id', data)
        orders.forEach((order) => {
          dispatch(removeItem({
            id: order._id
          }))
        })
        router.push({
          pathname: `/order-summary/${data.data.data._id}`,
          // query: { orders: data.data.orders }
        })
      })
    } catch (err) {
      console.log('the order was not successful and u will not be redirected yet!')
      console.log(err)
    }

    // router.push({
    //   pathname: '/order-summary',
    //   query: { orders, reference, price: amountToPay },
    // })
  }

  const data = { ...config, amount: amountToPay }
  const initializePayment = usePaystackPayment(data)

  return (
    <button
      className='h-[4rem] bg-blue-500 text-white text-[1.6rem] font-medium rounded-md px-8 flex items-center justify-center w-full'
      disabled={false}
      onClick={() => initializePayment(onSuccess, onclose)}>
      Place Order
    </button>
  )
}