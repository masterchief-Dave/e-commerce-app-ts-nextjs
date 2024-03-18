import { globalAxios } from "@/helpers/apiService"
import useAuth from "./useAuth"
import { setCookie } from "cookies-next"

const useRefreshToken = () => {
  const { setUser } = useAuth()

  const refresh = async () => {
    const response = await globalAxios.post(`/auth/refresh`, {})
    setUser(response?.data?.user)
    // setCookie('Authorization', response?.data?.user.token)
    return response.data.user.token
  }

  return refresh
}

export default useRefreshToken