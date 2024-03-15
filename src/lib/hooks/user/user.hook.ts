import UserService from "@/lib/services/user/user.service"
import type { UserBillingInfo, UserCartInterface, UserWishlistInterface } from "@/lib/types/user/user.type"
import useSWR from "swr"
import useAuth from "../useAuth"
import useSWRMutation from "swr/mutation"
import CheckoutService from "@/lib/services/checkout/checkout.service"

export const useGetLikedProducts = () => {
  const { user } = useAuth()
  return useSWR<UserWishlistInterface>(user && user._id.length > 1 ? '/user/wishlist' : [], () => UserService.getWishlist())
}

export const useGetCart = () => {
  const { user } = useAuth()

  return useSWR<UserCartInterface>(user && user._id.length > 1 ? `/user/cart` : [], () => UserService.getCart(user?.token as string))
}

export const useGetBillingAddress = () => {
  const { user } = useAuth()

  return useSWR<UserBillingInfo[]>(`/shipping/${user?._id}`, () => UserService.getBillingAddress(user?._id as string))
}

export const useGetDefaultBillingAddress = () => {
  return useSWR<UserBillingInfo>(`/shipping`, () => UserService.getDefaultBillingAddress())
}

export const useDeleteBillingAddress = () => {
  const { mutate } = useGetBillingAddress()
  return useSWRMutation(`/shipping`, UserService.removeBillingAddress, {
    onError() {
      // 
    },
    onSuccess: () => {
      mutate()
    }
  })
}

export const useGetUserOrders = () => {
  return useSWR<UserOrderInterface[]>('/order', () => UserService.getUserOrder())
}

export const useGetOrderSummary = (id: string) => {
  return useSWR<UserOrderInterface>(`/order/${id}`, () => CheckoutService.getOrder(id))
}