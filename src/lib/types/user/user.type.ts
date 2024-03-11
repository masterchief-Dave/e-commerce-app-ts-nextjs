export interface UserWishlistInterface {
  message: string
  data: string[]
}

export interface CartProducts extends Product {
  quantity: number
}

export interface UserCart {
  id: string,
  _id: string,
  quantity: number,
  price: number,
  image: string,
  stock: number,
  name: string
}

export interface UserCartInterface {
  message: string
  data: {
    id: string,
    _id: string,
    quantity: number,
    price: number,
    image: string,
    stock: number
    name: string
  }[]
  products: CartProducts[]
}