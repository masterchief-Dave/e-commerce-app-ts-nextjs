import CategoryService from "@/lib/services/category/category.service"
import type { CategoryParamInterface } from "@/lib/types/product"
import { useQuery, UseQueryOptions, useQueries } from "@tanstack/react-query"

export const useGetCategory = ({
  page,
  rating,
  price,
  name,
}: CategoryParamInterface) => {
  return useQuery({
    queryFn: () => CategoryService.getCategory({ page, rating, price, name }),
    queryKey: [page, rating, price, name],
  })
}
