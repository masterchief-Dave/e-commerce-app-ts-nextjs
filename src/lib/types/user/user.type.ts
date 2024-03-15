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

export interface UserBillingInfo {
  _id: string
  firstname: string
  lastname: string
  phoneNumber: string
  address: string
  country: string
  default: boolean
  updated_at: Date
  zipcode: string
  __v: number
}

export type BillingAddressInterface = Omit<UserBillingInfo, '_id' | '__v' | 'created_at' | 'updated_at'>
