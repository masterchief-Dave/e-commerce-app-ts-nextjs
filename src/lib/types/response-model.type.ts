import type { CategoryProductInterface } from "./product"

export interface CategoryResponseInterface {
  message: string
  length: number
  data: CategoryProductInterface[]
}
