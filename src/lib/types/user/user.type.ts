export interface UserWishlistInterface {
  message: string
  data: string[]
}

export interface CartProducts extends Product {
  quantity: number
}
export interface UserCartInterface {
  message: string
  data: { id: string, quantity: number, _id: string }[]
  products: CartProducts[]
}