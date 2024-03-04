import useUserStore from "@/lib/store/user.store"

const useAuth = () => {
  const { user, setUser } = useUserStore((state) => state)

  return {
    user,
    setUser
  }
}

export default useAuth