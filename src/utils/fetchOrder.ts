import { NextApiRequest } from "next"

export const fetchOrder = async (id: string, req:NextApiRequest) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/order/get-order/${id}`, {
    headers: {
      cookie: req.headers.cookie || ''
    }
  })

  const data = await res.json()
  const order:IOrder = data.data

  console.log('order data', { order })
  return order
}
