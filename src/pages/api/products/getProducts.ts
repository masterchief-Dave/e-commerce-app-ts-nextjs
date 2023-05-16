import axios from 'axios'

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

const productsUrl = axios.create({
  baseURL: `http://localhost:8100`,
})

export const getProducts = async () => {
  const response = await productsUrl.get('/products')

  return response.data
}

export const addProduct = async (product: Product) => {
  const response = await productsUrl.post('/products', product)

  return response.data
}

export const updateProduct = async (product: Product) => {
  const response = await productsUrl.patch(`/products/${product.id}`, product)

  return response.data
}

export const deleteProduct = async ({ id }: Product) => {
  const response = await productsUrl.patch(`/products/${id}`)

  return response.data
}
