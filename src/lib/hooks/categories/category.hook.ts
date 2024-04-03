import CategoryService from "@/lib/services/category/category.service"
import { useQuery, UseQueryOptions, useQueries } from "@tanstack/react-query"

interface CategoryParamInterface {
  page: number
  rating: string
  price: string
  name: string
}

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
