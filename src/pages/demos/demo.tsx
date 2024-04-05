// import { NavigationMenuDemo } from '@/components/Dropdown/NavigationDropdownMenu'
// import ResetEmailSentModal from '@/components/Modal/ResetEmailSent'
// import { Button } from '@chakra-ui/react'
import axios from "axios"
import { PaystackHook } from "@/lib/helpers/paystack"
import { useSelector } from "react-redux"
// import { RootState } from '@/app/store'
import { Button } from "@chakra-ui/react"
import { UserAccountDropdown } from "@/components/Dropdown/Account"
import { useSession } from "next-auth/react"
import { getUser } from "@/lib"
import { useUserStore } from "@/lib/hooks/useUserStore"
import { apiService } from "@/lib/helpers/apiService"
import useAuth from "@/lib/hooks/useAuth"
import useAxiosPrivate from "@/lib/hooks/useAxios.hook"
import PaginationComp from "@/components/pagination"
// import getUser from "@/hooks/getUser"

const NavigationMenuDemoExample = () => {
  const { user } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  console.log({ user })

  const session = useSession()

  // console.log(session)

  const totalPrice = 0

  // console.log({ totalPrice })
  const fn = async () => {
    try {
      ///api/order/get-my-orders
      // const response = await axios.get('/api/order/get-my-orders')
      console.log("the btn was clicked")
      // const response = await axios.get('/api/gettest')
      // const response = await axios.get('http://localhost:8100/api/v1/user/admin', { withCredentials: true })
      // const data = await response.data
      // console.log(data)
      // /api/products/getmyproducts?sort=asc&maxPrice=2000&minStock=10&minRating=4&minReview=2
      // api/products/getmyproducts?maxPrice=2000&minStock=10&minRating=4&sort=price

      // to test => /api/products/getmyproducts?minPrice=2000&minRating=4&productname=apple&sort=-price
      // const response = await axios.get('/api/products/getmyproducts?minPrice=2000&minRating=4&sort=-price')
      // const response = await axios.get('/api/products/getmyproducts?minPrice=2000&minRating=4&sort=-price')
      // http://localhost:3002/api/products/getmyproducts?maxPrice=2000&minStock=10&minRating=4&sort=-price

      const accessToken = `ya29.a0AfB_byCdDDT25J_Usm3mOw-DGdCzbP9OAKEYjozZtCN-Wvw-eOJp6qa81EFdNZzYzHiLUYwL-FL0j-bcIKK1s1Eex2bWYl05L21wMKFF4IJ-esElUClqZRRl4_o--KhdFiSIFO_DPT0jCFafq_1AJauWIQXb22dm0O9naCgYKAY4SARESFQHGX2MiNBhkGGxcv-3x18fy5jc_3g0171`

      // const response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${accessToken}`)

      // console.log(response)

      // this is the code that works (please note)
      // const userResponse = await axios.get(
      //   'https://www.googleapis.com/oauth2/v3/userinfo',
      //   {
      //     headers: {
      //       Authorization: `Bearer ${accessToken}`
      //     }
      //   }
      // )
      // console.log(userResponse)

      // get the user from my own server
      // fetchAuth()
      // const response = await axiosPrivate.get('/user', {
      //   headers: {
      //     'Authorization': user?.token
      //   }
      // })
      const response = await apiService("/user")
      console.log("response from the demo page", response)
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/user`, {
      //   credentials: 'include',

      // })
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async () => {
    await fn()

    // const res = await axios.get('/api/gettest')

    // console.log(res)
  }

  // getUser()

  return (
    // <NavigationMenuDemo />
    <div className="flex p-24">
      {/* <Button variant={'solid'} onClick={() => fn()}>simulate post request</Button> */}
      {/* <ResetEmailSentModal /> */}
      {/* <PaystackHook price={20000} /> */}
      <Button className="" onClick={handleClick}>
        test the endpoint
      </Button>

      {/* <PaginationComp /> */}
    </div>
  )
}

export default NavigationMenuDemoExample
