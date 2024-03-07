import { apiService } from "@/helpers/apiService"

class ProductService {
  static async getAllCategories() {
    return await apiService(`/products/category/all`)
  }

  // https://sage-warehouse-backend.onrender.com/api/v1/products?page=${pageIndex}
  static async getAllProducts({ page }: { page: number }) {
    return await apiService(`/products?page=${page}`)
  }

  static async likeProduct(url: string, { arg }: { arg: { id: string, page: number } }) {
    const response = await apiService(`/products/like`, 'POST', {
      id: arg.id
    })

    return response
  }

  static async addToCart(url: string, { arg }: { arg: { id: string, page: number } }) {
    return await apiService(`/products/add-to-cart`, 'POST', {
      id: arg.id
    })
  }


}

export default ProductService