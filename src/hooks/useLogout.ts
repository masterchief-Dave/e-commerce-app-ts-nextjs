import { useDispatch } from "react-redux"
import Cookies from "js-cookie"
import { logout } from "@/features/login/loginSlice"

export const useLogout = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    localStorage.removeItem('user')
    Cookies.remove('authLoginToken')

    dispatch(logout())
  }

  return { handleLogout }
}