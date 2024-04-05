export interface CategoryInterface {
  data: {
    data: { name: string; products: Product[] }[]
  }
}

export interface CategoryParamInterface {
  page?: number
  rating?: string
  price?: string
  name?: string
}

export interface CategoryProductInterface {
  discount: number
  updated_at: string
  _id: string
  name: string
  price: number
  description: string
  ratings: number
  images: {
    public_id: string
    url: string
    id: string
  }[]
  category: string
  seller: string
  stock: number
  numOfReviews: number
  reviews: any[]
  user: string
  flashSale: boolean
  createdAt: string
  discountedPrice: number
  __v: number
}
