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
  id: string
  name: string
  price: number
  description: string
  ratings: number
  images: {
    publicId: string
    url: string
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
