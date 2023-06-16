
import { useAppSelector } from '@/hooks/reduxhooks'

export const useCart = () => {
  const cart = useAppSelector((state) => state.cart.value)

  return {
    cart
  }
}
