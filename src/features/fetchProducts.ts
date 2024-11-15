import axios from 'axios'

type Data = {
  status: string
  message?: string
  data: {
    count: number
    length: number
    products: Product[]
  }
  err?: unknown
}

const productsApi = axios.create({
  // baseURL: `http://localhost:3002`,
  baseURL: `https://e-commerce-app-ts-nextjs.vercel.app`,
})

// https://sage-warehouse-backend.onrender.com/api/v1/products
export const fetchProducts = async (pageIndex: number): Promise<Data> => {
  const response = await axios.get(
    `/api/products/getProducts?page=${pageIndex}`
  )


  return response.data
}

export const addProduct = async (product: Product) => {
  const response = await productsApi.post('/products', product)

  return response.data
}

export const updateProduct = async (product: Product) => {
  const response = await productsApi.patch(`/products/${product._id}`, product)

  return response.data
}

export const deleteProduct = async ({ _id }: Product) => {
  const response = await productsApi.patch(`/products/${_id}`)

  return response.data
}

// when I fetch my data from the /api that is when I can do things like getServerSideProps or getStaticProps.

/**
 * 
 * 
 * export const fetchProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
  )

  const data = await response.json()

  const products: Product[] = data.products

  return products
}

 */
