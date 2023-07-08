import { useAppSelector } from '@/hooks/reduxhooks'

export const useAuth = () => {
  const auth = useAppSelector((state) => state.login)

  return auth
}