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
  const cartQuery = useGetCart()

  return useSWRMutation('/products/add-to-cart', ProductService.addToCart, {
    onError() {
      // 
    },
    onSuccess: (data) => {
      mutate()
      cartQuery.mutate()
    }
  })
}

export const useIncreaseItemInCart = () => {
  const { mutate } = useGetCart()

  return useSWRMutation('/products/increase-item-in-cart', ProductService.increaseItemInCart, {
    onError() { },
    onSuccess: () => {
      mutate()
    }
  })
}

export const useDecreaseItemInCart = () => {
  const { mutate } = useGetCart()

  return useSWRMutation('/products/decrease-item-in-cart', ProductService.decreaseItemInCart, {
    onError() { },
    onSuccess: () => {
      mutate()
    }
  })
}

export const useRemoveItemIncart = () => {
  const { mutate } = useGetCart()

  return useSWRMutation('/products/remove-item-in-cart', ProductService.removeItemInCart, {
    onError() { },
    onSuccess: () => {
      mutate()
    }
  })
}