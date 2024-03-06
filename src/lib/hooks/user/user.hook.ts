import UserService from "@/lib/services/user/user.service"
import type { UserCartInterface, UserWishlistInterface } from "@/lib/types/user/user.type"
import useSWR from "swr"

export const useGetLikedProducts = () => {
  return useSWR<UserWishlistInterface>('/user/wishlist', () => UserService.getWishlist())
}

export const useGetCart = () => {
  return useSWR<UserCartInterface>('/user/cart', () => UserService.getCart())
}