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

interface PaymentFormInput {
  userName: string
  cardNumber: string
  expiryDate: string
  cvc: string
}
