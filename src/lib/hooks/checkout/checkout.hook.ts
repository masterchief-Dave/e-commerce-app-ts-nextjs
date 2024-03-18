import useSWR from "swr"

import CheckoutService from "@/lib/services/checkout/checkout.service"


export const useGetOrderSummary = (id: string) => {
  return useSWR<UserOrderInterface>(`/order/${id}`, () => CheckoutService.getOrder(id))
}