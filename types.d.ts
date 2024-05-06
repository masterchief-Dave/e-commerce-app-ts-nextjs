import { Types } from "mongoose"
import { string } from "yup"

declare global {
  interface Header {
    id: number
    title: string
    nameBold: string
    nameNormal: string
    description: string
    price: string
    formerPrice: string
    promoPrice: string
    img: JSX.Element | string | StaticImageData
  }
}
declare global {
  interface BestDeals {
    id: number
    name: string
    img: string | StaticImageData
    rating: number
    price: number
    formerPrice: number
  }
}

declare global {
  interface ICategory {
    img: string | StaticImageData
    name: string
    link: string
  }
}
declare global {
  interface Product {
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
    reviews: {
      name: string
      rating: number
      comment: string
    }[]
    user: string
    createdAt: Date
    discount: number
    discountedPrice: number
  }
}
declare global {
  interface Cart extends Product {
    cartQuantity: number
  }
}
declare global {
  interface Wishlist extends Product {
    cartQuantity: number
  }
}
declare global {
  interface PaymentFormInput {
    userName: string
    cardNumber: string
    expiryDate: string
    cvc: string
  }
}
declare global {
  interface IDelivery {
    _id: string
    street: string
    zipCode: string
    city: string
    state: string
    country: string
  }
}
declare global {
  interface IAddress extends IDelivery {
    phoneNumber: string
    country: string
    user: Types.ObjectId
    zipCode: string
  }
}
declare global {
  interface ICard {
    name: string
    cardNumber: string
    cvc: string
    expiryDate: Date
  }
}

declare global {
  interface IUser {
    id: string
    _id: Types.ObjectId
    name: string
    googleId: string
    email: string
    // password: string
    avatar: string
    role: string
    createdAt: Date
    resetPasswordToken: string
    resetPasswordExpire: Date
    passwordChangedAt: Date
    active: boolean
    refreshToken: string
    deliveryAddress: IDelivery[]
    creditCards: ICard[]

    address: string
    image: string
    email: string
    iat: number
    exp: number
    jti: string
    password: string
    picture: string
    role: string
    sub: string
    success: boolean
    token: string
    user: string
  }
}

declare global {
  type User = {
    success: boolean
    token: string | null
    _id?: string | Types.ObjectId
    user: {
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
  }
}

export type UserSession = Omit<User, "success" | "token" | "_id"> & {
  message: string
}

declare global {
  interface AuthUser {
    avatar: {
      public_id: string
      url: string
    }
    _id: string
    name: string
    email: string
    password: string
    role: string
    passwordChangedAt: string
    createdAt: string
    __v?: number
  }
}

declare global {
  type UserLoginSession = {
    id: string
    photo: string
    name: string
    email: string
    success: boolean
    token: string | null
  }
}

declare global {
  type UserSession = {
    _id: string
    photo: string
    name: string
    email: string
    success: boolean
    token: string | null
    role: "USER" | "ADMIN" | "NO USER"
    cart: number
  }
}

declare global {
  type RegisterSession = {
    id: string
    photo: string
    name: string
    email: string
    success: boolean
    token: string | null
  }
}

declare global {
  interface BillingAddress {
    firstname: string
    lastname: string
    country: string
    zipcode: string
    address: string
    default: boolean
    phoneNumber: string
  }
}

declare global {
  interface ShippingAddress {
    street: string
    city: string
    state: string
    phoneNumber: string
    zipCode: string
    country: string
    user: User
  }
}

declare global {
  interface UserOrderInterface {
    shippingInfo: {
      firstname: string
      lastname: string
      country: string
      zipcode: string
      address: string
    }
    paymentInfo: {
      status: string
      reference: string
      message: string
      transaction: string
    }
    _id: string
    user: {
      _id: string
      name: string
      email: string
    }
    orderItems: {
      quantity: number
      price: number
      product: Product
      name: string
      image: string
      _id: string
    }[]
    taxPrice: number
    itemsPrice: number
    shippingPrice: number
    totalPrice: number
    paidAt: string
    orderStatus: string
    deliveredAt: string | null
    createdAt: string
    updated_at: string
    __v: number
  }
}

/**
 * {
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2IyNjczMzRlZDMyNDUwNjA3Yzk5MSIsImlhdCI6MTY4ODYyNDI4MywiZXhwIjoxNjg4NjI3ODgzfQ.wFEzba-XJRC67cCiDAo6DgBjGF4rrsiZzIv1aP8dDqg",
    "user": {
        "avatar": {
            "public_id": "avataaars_rkyikx",
            "url": "https://res.cloudinary.com/diggungrj/image/upload/v1668579345/avataaars_rkyikx.svg"
        },
        "_id": "637b267334ed32450607c991",
        "name": "David",
        "email": "bodunrindavidbond@gmail.com",
        "password": "$2a$10$c0Vt.BG3PpeTp9z1L3ZK4OcNTTEprrjBcrqsHYaVUJfFr0GIX6Vgy",
        "role": "admin",
        "passwordChangedAt": "2022-11-19T23:00:00.000Z",
        "createdAt": "2022-11-21T07:19:15.151Z",
        "__v": 0
    }
}
 */

interface Register {
  name: string
  email: string
  password: string
}

/**
 * {
    "name":"David",
    "email": "bodunrindavidbond@gmail.com",
    "password":"12345",
    "passwordChangedAt": "2022/11/20"
}
 */

declare global {
  interface UpdatePasswordInterface {
    password: string
    newPassword: string
  }
}
