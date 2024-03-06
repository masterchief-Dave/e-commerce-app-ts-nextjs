import ProductService from "@/lib/services/products/product.service"
import type { CategoryInterface } from "@/lib/types/product"
import useSWR from "swr"

export const useGetCategories = () => {
  return useSWR<CategoryInterface>("/products/category/all")
}