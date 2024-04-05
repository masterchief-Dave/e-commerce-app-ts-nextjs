import { apiService } from "@/lib/helpers/apiService"
import type {
  BillingAddressInterface,
  UserCart,
} from "@/lib/types/user/user.type"

interface CheckoutServiceProp {
  orders: UserCart[]
  reference: string
  userId: string
  shippingAddress: BillingAddressInterface
  price: number
  shippingPrice: number
  taxPrice: number
}

class CheckoutService {
  static async checkout({
    orders,
    price,
    reference,
    shippingAddress,
    shippingPrice,
    taxPrice,
    userId,
  }: CheckoutServiceProp) {
    return await apiService(`/order/new`, "POST", {
      orders,
      reference,
      userId,
      shippingAddress,
      price,
      shippingPrice,
      taxPrice,
    })
  }

  static async getOrder(id: string) {
    const response = await apiService(`/order/${id}`)
    return response.data.order
  }
}

export default CheckoutService
