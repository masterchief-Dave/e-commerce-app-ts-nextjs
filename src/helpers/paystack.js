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
}

const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

export const PaystackHook = ({ loading, orders, price }) => {
  const router = useRouter()
  const amountToPay = parseFloat(price) * 100

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference)
    router.push({
      pathname: '/success',
      query: { orders, reference, price: amountToPay },
    })
  }


  const data = { ...config, amount: amountToPay }
  const initializePayment = usePaystackPayment(data)

  return (
    <button
      className='h-[4rem] bg-blue-500 text-white text-[1.4rem] font-medium rounded-md px-8 flex items-center justify-center w-fit'
      onClick={() => initializePayment(onSuccess, onclose)}>
      Check out
    </button>
  )
}