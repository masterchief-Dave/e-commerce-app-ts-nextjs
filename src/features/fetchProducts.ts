import axios from 'axios'

const productsApi = axios.create({
  baseURL: `http://localhost:3002`,
})

export const fetchProducts = async () => {
  const response = await productsApi.get('/api/products/getProducts')

  console.log(response.data)

  // return response.data
}

export const addProduct = async (product: Product) => {
  const response = await productsApi.post('/products', product)

  return response.data
}

export const updateProduct = async (product: Product) => {
  const response = await productsApi.patch(`/products/${product.id}`, product)

  return response.data
}

export const deleteProduct = async ({ id }: Product) => {
  const response = await productsApi.patch(`/products/${id}`)

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
