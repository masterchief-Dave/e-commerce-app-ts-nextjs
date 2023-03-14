import { StaticImageData } from 'next/image'

interface BestDeals {
  name: string
  img: string | StaticImageData
  rating: number
  price: number
  formerPrice: number
}

export const bestDeals: BestDeals[] = [
  {
    name: 'Amazon Speaker',
    img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/products/8_9da9f451-69b8-45eb-b5dd-8d261a4aae6b_480x.jpg?v=1573184521',
    rating: 5,
    price: 450,
    formerPrice: 500,
  },
  {
    name: 'Samsung s22',
    img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/products/8_9da9f451-69b8-45eb-b5dd-8d261a4aae6b_480x.jpg?v=1573184521',
    rating: 4.5,
    price: 450,
    formerPrice: 500,
  },
  {
    name: 'Apple Watch series 3',
    img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/products/8_9da9f451-69b8-45eb-b5dd-8d261a4aae6b_480x.jpg?v=1573184521',
    rating: 4.5,
    price: 450,
    formerPrice: 500,
  },
  {
    name: 'Samsung s22',
    img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/products/8_9da9f451-69b8-45eb-b5dd-8d261a4aae6b_480x.jpg?v=1573184521',
    rating: 4.5,
    price: 450,
    formerPrice: 500,
  },
  {
    name: 'Samsung s22',
    img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/products/8_9da9f451-69b8-45eb-b5dd-8d261a4aae6b_480x.jpg?v=1573184521',
    rating: 4.5,
    price: 450,
    formerPrice: 500,
  },
  {
    name: 'Samsung s22',
    img: 'https://cdn.shopify.com/s/files/1/0272/1493/8165/products/8_9da9f451-69b8-45eb-b5dd-8d261a4aae6b_480x.jpg?v=1573184521',
    rating: 4.5,
    price: 450,
    formerPrice: 500,
  },
]
