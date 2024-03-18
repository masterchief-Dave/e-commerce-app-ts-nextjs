import UserService from "@/lib/services/user/user.service"
import type { UserBillingInfo, UserCartInterface, UserWishlistInterface } from "@/lib/types/user/user.type"
import useSWR from "swr"
import useAuth from "../useAuth"
import useSWRMutation from "swr/mutation"

export const useGetLikedProducts = () => {
  const { user } = useAuth()
  return useSWR<UserWishlistInterface>(user && user.role.toUpperCase() === 'USER' ? '/user/wishlist' : [], () => UserService.getWishlist())
}

export const useGetCart = () => {
  const { user } = useAuth()

  return useSWR<UserCartInterface>(user && user.role.toUpperCase() === 'USER' ? `/user/cart` : null, UserService.getCart)
}

export const useGetBillingAddress = () => {
  const { user } = useAuth()

  return useSWR<UserBillingInfo[]>(
    `/shipping/${user?._id}`,
    () => UserService.getBillingAddress(user?._id as string))
}

export const useGetDefaultBillingAddress = () => {
  return useSWR<UserBillingInfo>(
    `/shipping`,
    () => UserService.getDefaultBillingAddress())
}

export const useDeleteBillingAddress = () => {
  const { mutate } = useGetBillingAddress()
  return useSWRMutation(
    `/shipping`,
    UserService.removeBillingAddress,
    {
      onError() {
        // 
      },
      onSuccess: () => {
        mutate()
      }
    })
}

export const useGetUserOrders = () => {
  return useSWR<UserOrderInterface[]>(
    '/order',
    () => UserService.getUserOrder())
}

// export const useGetOrderSummary = (id: string) => {
//   return useSWR<UserOrderInterface>(`/order/${id}`, () => CheckoutService.getOrder(id))
// }