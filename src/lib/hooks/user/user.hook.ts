import UserService from "@/lib/services/user/user.service"
import type { UserCartInterface, UserWishlistInterface } from "@/lib/types/user/user.type"
import useSWR from "swr"
import useAuth from "../useAuth"

export const useGetLikedProducts = () => {
  return useSWR<UserWishlistInterface>('/user/wishlist', () => UserService.getWishlist())
}

export const useGetCart = () => {
  const { user } = useAuth()

  return useSWR<UserCartInterface>(`/user/cart`, () => UserService.getCart(user?.token as string))
}

/**
 * message: string
  data: { id: string, quantity: number, _id: string }[]
  products: Product[]
 */