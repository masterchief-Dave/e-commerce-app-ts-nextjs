import ProductService from "@/lib/services/products/product.service"
import type { CategoryInterface } from "@/lib/types/product"
import useSWR from "swr"
import useSWRMutation from 'swr/mutation'
import { useGetCart, useGetLikedProducts } from "../user/user.hook"

export const useGetCategories = () => {
  return useSWR<CategoryInterface>("/products/category/all")
}

export const useGetProducts = ({ page }: { page: number }) => {
  return useSWR(`/products/page/${page}`, () => ProductService.getAllProducts({ page }))
}

export const useLikeProduct = (page: number) => {
  const { mutate } = useGetProducts({ page })
  const userQuery = useGetLikedProducts()

  return useSWRMutation(`/products/like`, ProductService.likeProduct, {
    onError() {
      // 
    },
    onSuccess: (data: any) => {
      mutate()
      userQuery.mutate()
    },
    revalidate: true
  })
}

export const useAddToCart = (page: number) => {
  const { mutate } = useGetProducts({ page })
  const userQuery = useGetCart()

  return useSWRMutation('/products/add-to-cart', ProductService.addToCart, {
    onError() {
      // 
    },
    onSuccess: (data) => {
      mutate()
      userQuery.mutate()
    }
  })
}