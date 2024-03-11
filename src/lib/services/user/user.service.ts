import { apiService } from "@/helpers/apiService"
import { error } from "@/lib/utils/logger"
import axios from "axios"

class UserService {
  static async getWishlist() {
    return await apiService(`/user/wishlist`)
  }

  static async getCart(token: string) {
    try {
      const response = await axios(`${process.env.NEXT_PUBLIC_API_SERVER}/user/cart`, {
        headers: {
          'Authorization': token
        }
      })

      if (!response.data) {
        return null
      }

      return response.data
    } catch (err) {
      error(err as unknown as any)
    }

    // return await apiService(`/user/cart`, 'GET', {})
  }

  static async createBillingAddress({ title, firstname, lastname, country, zipcode, addressLine1, saveAsDefault }: BillingAddress) {
    try {
      return apiService(`${process.env.NEXT_PUBLIC_API_SERVER}/shipping`, 'POST', {
        title: title,
        firstname,
        lastname,
        country,
        zipcode,
        addressLine1,
        default: saveAsDefault
      })
    } catch (err) {
      error(err as unknown as any)
    }
  }

  static async getBillingAddress() {
    try {
      return apiService(`${process.env.NEXT_PUBLIC_API_SERVER}/`, 'GET')
    } catch (err) {
      error(err as unknown as any)
    }
  }
}

export default UserService