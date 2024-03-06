import { apiService } from "@/helpers/apiService"

class ProductService {
  static async getAllCategories() {
    return apiService(`/products/category/all`)
  }
}

export default ProductService