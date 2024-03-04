import useAuth from "./useAuth"
import { globalAxios } from "@/helpers/apiService"


const useLogout = () => {
  const { setUser } = useAuth()

  const handleLogout = async () => {
    localStorage.removeItem('user')
    setUser(null)

    try {
      await globalAxios.post('/auth/logout', {}, { withCredentials: true })
    } catch (err) {
      console.log(err)
    }
  }

  return handleLogout
}

export default useLogout