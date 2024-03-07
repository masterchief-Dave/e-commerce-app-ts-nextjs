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
}

export default UserService