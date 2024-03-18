import ReviewService from "@/lib/services/review/review.service"
import type { ProductReviewResponseInterface } from "@/lib/types/review/review.type"
import useSWR from "swr"
import useSWRMutation from "swr/mutation"

export const useGetProuctReview = (id: string) => {
  return useSWR<ProductReviewResponseInterface>(
    `/review/${id}`,
    () => ReviewService.getProductReview(id))
}

export const useCreateProductReview = () => {
  return useSWRMutation('/review', ReviewService.createProductReview, {
    onError() {
      // 
    },
    onSuccess: () => { }
  })
}