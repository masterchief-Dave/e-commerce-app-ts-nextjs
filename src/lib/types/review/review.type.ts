import type { UserCart } from "../user/user.type"

interface User {
  avatar: string
  _id: string
  role: string
  createdAt: Date
  deliveryAddress: string[]
  creditCards: any[]
  name: string
  email: string
  __v: number
  order: string[]
  passwordChangedAt: Date
  shippingAddress: ShippingAddress[]
  cart: UserCart[]
  favorites: string[]
  orders: string[]
  updated_at: Date
  reviews: string[]
}


export interface ProductReviewResponseInterface {
  message: string
  data: {
    _id: string
    name: string
    price: number
    description: string
    ratings: number
    images: {
      public_id: string
      url: string
      _id: string
    }[]
    category: string
    seller: string
    stock: number
    numOfReviews: number
    reviews: {
      _id: string
      subject: string
      user: User
      rating: number
      product: string
      review: string
      createdAt: Date
      updated_at: Date
      __v: number
    }[]
    user: string
    flashSale: boolean
    createdAt: Date
    __v: number
    updated_at: Date
  }
}
