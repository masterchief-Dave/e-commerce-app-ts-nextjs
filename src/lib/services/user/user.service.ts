import { apiService } from "@/helpers/apiService"
import { error } from "@/lib/utils/logger"
import axios from "axios"

class UserService {
  static async getWishlist() {
    return await apiService(`/user/wishlist`)
  }

  static async getCart(token: string) {
    // try {
    //   const response = await axios(`/user/cart`, {
    //     headers: {
    //       'Authorization': token
    //     }
    //   })

    //   if (!response.data) {
    //     return null
    //   }

    //   return response.data
    // } catch (err) {
    //   error(err as unknown as any)
    // }

    return await apiService(`/user/cart`, 'GET')
  }

  static async updatePassword(currentPassword: string, newPassword: string) {
    return await apiService(`/auth/updatepassword`, 'PATCH', {
      password: currentPassword,
      newPassword
    })
  }

  static async createBillingAddress({ firstname, lastname, country, zipcode, address, default: defaultValue, phoneNumber }: BillingAddress) {
    try {
      return await apiService(`/shipping`, 'POST', {
        firstname,
        lastname,
        country,
        zipcode,
        address,
        phoneNumber,
        default: defaultValue
      })
    } catch (err) {
      error(err as unknown as any)
    }
  }

  static async getBillingAddress(id: string) {
    try {
      const response = await apiService(`/shipping/${id}`, 'GET')
      return response.address
    } catch (err) {
      error(err as unknown as any)
    }
  }

  static async getDefaultBillingAddress() {
    const response = await apiService(`/shipping`, 'GET')
    return response.address[0]
  }

  static async removeBillingAddress(url: string, { arg }: { arg: { id: string } }) {
    return await apiService(`/shipping`, 'DELETE', {
      id: arg.id
    })
  }

  static async getUserOrder() {
    return await apiService(`/order`, 'GET').then((response) => response.data.orders)
  }
}

export default UserService