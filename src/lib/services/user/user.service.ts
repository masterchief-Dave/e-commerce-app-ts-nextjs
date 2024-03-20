import { apiService } from "@/helpers/apiService"
import { errorLogger } from "@/lib/utils/logger"
import axios from "axios"

class UserService {
  static async getWishlist() {
    return await apiService(`/user/wishlist`)
  }

  static async getCart() {
    return await apiService(`/user/cart`, "GET")
  }

  static async updatePassword(currentPassword: string, newPassword: string) {
    return await apiService(`/auth/updatepassword`, "PATCH", {
      password: currentPassword,
      newPassword,
    })
  }

  static async createBillingAddress({
    firstname,
    lastname,
    country,
    zipcode,
    address,
    default: defaultValue,
    phoneNumber,
  }: BillingAddress) {
    try {
      return await apiService(`/shipping`, "POST", {
        firstname,
        lastname,
        country,
        zipcode,
        address,
        phoneNumber,
        default: defaultValue,
      })
    } catch (err) {
      errorLogger(err as unknown as any)
    }
  }

  static async getBillingAddress(id: string) {
    try {
      const response = await apiService(`/shipping/${id}`, "GET")
      return response.address
    } catch (err) {
      errorLogger(err as unknown as any)
    }
  }

  static async getDefaultBillingAddress() {
    const response = await apiService(`/shipping`, "GET")
    return response.address[0]
  }

  static async removeBillingAddress(
    url: string,
    { arg }: { arg: { id: string } }
  ) {
    return await apiService(`/shipping`, "DELETE", {
      id: arg.id,
    })
  }

  static async getUserOrder() {
    return await apiService(`/order`, "GET").then(
      (response) => response.data.orders
    )
  }

  static async getPopulatedWishlistProducts() {
    return await apiService("/user/wishlist/products", "GET")
  }
}

export default UserService
