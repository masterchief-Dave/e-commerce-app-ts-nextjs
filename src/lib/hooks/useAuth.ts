import useUserStore from "@/lib/store/user.store"

const useAuth = () => {
  const { user, setUser } = useUserStore((state) => state)
  const isAuthenticated = user && user?._id.length > 1 ? true : false

  return {
    user,
    setUser,
    isAuthenticated
  }
}

export default useAuth