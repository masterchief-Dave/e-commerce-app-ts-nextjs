import { globalAxios } from "@/lib/helpers/apiService"
import useAuth from "./useAuth"
import useUserStore from "../store/user.store"

const useRefreshToken = () => {
  const { setUser } = useAuth()
  const { setUserLoading } = useUserStore((state) => state)

  const refresh = async () => {
    setUserLoading(true)
    const response = await globalAxios.post(`/auth/refresh`, {})
    setUser(response?.data?.user)
    setUserLoading(false)
    return response.data.user.token
  }

  return refresh
}

export default useRefreshToken
