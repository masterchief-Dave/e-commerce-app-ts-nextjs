import { globalAxios } from "@/helpers/apiService"
import useAuth from "./useAuth"

const useRefreshToken = () => {
  const { setUser } = useAuth()

  const refresh = async () => {
    const response = await globalAxios.post(`/auth/refresh`, {})
    setUser(response?.data?.user)

    return response.data.user.token
  }

  return refresh
}

export default useRefreshToken