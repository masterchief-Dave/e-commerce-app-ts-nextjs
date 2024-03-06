import { apiService } from "@/helpers/apiService"

class UserService {
  static async getWishlist() {
    return await apiService(`/user/wishlist`)
  }

  static async getCart() {
    return await apiService(`/user/cart`)
  }
}

export default UserService