export interface UserWishlistInterface {
  message: string
  data: string[]
}

export interface CartProducts extends Product {
  quantity: number
}

export interface UserCart {
  id: string
  _id: string
  quantity: number
  price: number
  image: string
  stock: number
  name: string
}

export interface UserCartInterface {
  message: string
  data: {
    id: string
    _id: string
    quantity: number
    price: number
    image: string
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

export type BillingAddressInterface = Omit<
  UserBillingInfo,
  "_id" | "__v" | "created_at" | "updated_at"
>

/**
 * {
    "message": "success",
    "data": [
        {
            "name": "Sony WH-1000XM4 Wireless Headphones",
            "image": "https://ucrolthr.sirv.com/Images/img/headphones-landscape-3.jpg",
            "price": 349,
            "rating": 4.8,
            "_id": "646e87919b081db85fa68306",
            "discount": 10,
            "discountedPrice": 34.9
        }
    ]
}
 */

export interface UserWishlistProducts {
  message: string
  data: {
    name: string
    images: { public_id: string; url: string; id: string }[]
    price: number
    ratings: number
    _id: string
    discount: number
    discountedPrice: number
  }[]
}
