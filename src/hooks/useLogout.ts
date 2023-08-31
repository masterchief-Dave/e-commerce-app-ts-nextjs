import { useDispatch } from "react-redux"

import { logout } from "@/features/login/loginSlice"

export const useLogout = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    localStorage.removeItem('user')
    dispatch(logout())
  }

  return { handleLogout }
}