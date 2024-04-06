import { apiService } from "@/lib/helpers/apiService"
import type { CategoryRequestInterface } from "@/lib/types/request-model.type"

class CategoryService {
  static async getCategory(params: CategoryRequestInterface) {
    const constructQueryParams = params
    return await apiService(`/products/category?categoryname=${params.name}`)
  }
}

export default CategoryService
