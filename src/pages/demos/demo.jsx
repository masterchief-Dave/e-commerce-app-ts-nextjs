
// import { NavigationMenuDemo } from '@/components/Dropdown/NavigationDropdownMenu'
// import ResetEmailSentModal from '@/components/Modal/ResetEmailSent'
// import { Button } from '@chakra-ui/react'
import axios from 'axios'
import { PaystackHook } from '@/helpers/paystack'
import { selectorCartTotalAmount } from '@/features/cart/cartSlice'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { Button } from '@chakra-ui/react'

const NavigationMenuDemoExample = () => {

  const totalPrice = useSelector((state) => {
    return selectorCartTotalAmount(state)
  })

  // console.log({ totalPrice })
  const fn = async () => {
    try {
      const response = await axios.patch('/api/products/update-product/1')
      const data = await response.data
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async () => {
    await fn()

    // const res = await axios.get('/api/gettest')

    // console.log(res)
  }

  return (
    // <NavigationMenuDemo />
    <div className='flex p-24'>
      {/* <Button variant={'solid'} onClick={() => fn()}>simulate post request</Button> */}
      {/* <ResetEmailSentModal /> */}
      {/* <PaystackHook price={20000} /> */}
      <Button className='' onClick={handleClick}>test the endpoint</Button>
    </div>
  )
}



export default NavigationMenuDemoExample