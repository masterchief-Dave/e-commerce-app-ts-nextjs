import axios from "axios"

async function fetchProduct(id: string) {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_SERVER}/products/${id}`)
  return response.data
}

export default fetchProduct