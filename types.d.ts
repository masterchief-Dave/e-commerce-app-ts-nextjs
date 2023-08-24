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

interface BestDeals {
  id: number
  name: string
  img: string | StaticImageData
  rating: number
  price: number
  formerPrice: number
}

interface ICategory {
  img: string | StaticImageData
  name: string
}

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
}

interface Cart extends Product {
  cartQuantity: number
}

interface Wishlist extends Product {
  cartQuantity: number
}

interface PaymentFormInput {
  userName: string
  cardNumber: string
  expiryDate: string
  cvc: string
}

interface IDelivery {
  street: string
  zip: string
  city: string
  state: string
}

interface ICard {
  name: string
  cardNumber: string
  cvc: string
  expiryDate: Date
}


interface IUser {
  id: string
  name: string
  googleId: string
  email: string
  // password: string
  avatar: string,
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

interface User {
  success: boolean
  token: string | null
  user: {
    avatar: {
      public_id: string
      url: string
    }
    _id: string
    name: string
    email: string
    password: string,
    role: string
    passwordChangedAt: Date
    createdAt: Date
    __v?: number
  }
}

type UserLoginSession = {
  id: string
  photo: string
  name: string
  email: string
  success: boolean
  token: string | null
}

type UserSession = {
  id: string
  photo: string
  name: string
  email: string
  success: boolean
  token: string | null
}

type RegisterSession = {
  id: string
  photo: string
  name: string
  email: string
  success: boolean
  token: string | null
}

interface BillingAddress {
  title: String
  firstname: String
  lastname: String
  country: String
  zipcode: String
  addressLine1: String
  addressLine2: String
  default?: Boolean
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