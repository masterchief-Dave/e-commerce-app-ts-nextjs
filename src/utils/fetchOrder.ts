import axios from "axios"

export const fetchOrder = async (req: any) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/order/get-orders`, {
    headers: {
      cookie: req.headers.cookie || ''
    }
  })

  const data: IOrder[] = response.data.data
  return data
}

// calling my express server from here
export const fetchDataFromExpressServer = async (req: any, token: string) => {
  const response = await axios.get(`http://localhost:8100/api/v1/order`, {
    withCredentials: true,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  const data = await response.data
  console.log({data})

  return data
}