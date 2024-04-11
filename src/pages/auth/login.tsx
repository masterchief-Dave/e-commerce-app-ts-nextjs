import AuthLayout from "@/components/Layout/Auth"
import LoginForm from "@/components/Form/loginForm"
import AuthService from "@/lib/services/auth/auth.service"
import axios from "axios"
import { useRouter } from "next/router"
import useAuth from "@/lib/hooks/useAuth"
import { useEffect, useState } from "react"
import { errorLogger, info } from "@/lib/utils/logger"
import useUserStore from "@/lib/store/user.store"

type Props = {
  myCookieValue: string
  data: string
}

const Login = ({ myCookieValue, data }: Props) => {
  const router = useRouter()
  const { setUser } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({
    state: false,
    message: "",
  })
  const { setUserLoading } = useUserStore((state) => state)

  const handleSubmit = async (email: string, password: string) => {
    try {
      // https://sage-warehouse-backend.onrender.com/
      setIsLoading(true)
      const response = await AuthService.login({ email, password })

      if (response?.success) {
        setIsLoading(false)
        axios.defaults.headers.common["Authorization"] = response.user.token
        // SET THE HEADER COOKIE HERE FOR THE SERVER SIDE PROPS
        // setCookie('Authorization', response.user.token)
        setUser({
          email: response.user.email,
          _id: response.user._id,
          name: response.user.name,
          photo: response.user.photo,
          token: response.user.token,
          role: response.user.role,
        })
        setUserLoading(false)
        return router.push("/")
      }

      setIsLoading(false)
      setError({ state: true, message: response?.statusText })
    } catch (err: any) {
      setIsLoading(false)
      errorLogger({
        url: router.asPath,
        message: "An error occured in the login page",
        err,
      })
    }
  }

  return (
    <AuthLayout>
      <section className="h-fit w-full grid grid-cols-12">
        <LoginForm
          handleSubmit={handleSubmit}
          error={error}
          isLoading={isLoading}
        />
      </section>
    </AuthLayout>
  )
}

export default Login
