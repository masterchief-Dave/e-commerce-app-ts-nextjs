import AuthLayout from '@/components/Layout/Auth'
import LoginForm from "@/components/Form/loginForm"
import AuthService from "@/lib/services/auth.service"
import axios from "axios"
import { useRouter } from "next/navigation"
import useAuth from "@/hooks/useAuth"
import { useState } from "react"

type Props = {
  myCookieValue: string,
  data: string
}

interface FormData {
  email: string
  password: string
}

const Login = ({ myCookieValue, data }: Props) => {
  const router = useRouter()
  const { setUser } = useAuth()
  const [error, setError] = useState({
    state: false,
    message: ''
  })

  const handleSubmit = async (email: string, password: string) => {
    try {
      // https://sage-warehouse-backend.onrender.com/
      const response = await AuthService.login({ email, password })
      console.log({ response })

      if (response?.success) {
        axios.defaults.headers.common["Authorization"] = response.user.token
        setUser({
          email: response.user.email,
          _id: response.user._id,
          name: response.user.name,
          photo: response.user.photo,
          token: response.user.token
        })
        router.push('/')
      }

      setError({ state: true, message: response?.statusText })
    } catch (err: any) {
      console.log(err)
      // dispatch(loginFailure(err.message))
    }
  }

  return (
    <AuthLayout>
      <section className='h-fit w-full grid grid-cols-12'>
        <LoginForm handleSubmit={handleSubmit} error={error} />
      </section>
    </AuthLayout >
  )
}

// export async function getServerSideProps({ req }: any) {
//   const response = await fetchLogin()
//   console.log(response)
//   const myCookieValue = req.cookies.e_commerce_token || 'No cookie found'
//   return {
//     props: {
//       myCookieValue,
//       // data
//     },
//   }
// }

export default Login
