export const fetchUserOrder = async (id: string, req: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/order/get-order/${id}`, {
    headers: {
      cookie: req.headers.cookie || ''
    }
  })

  const data = await res.json()
  const order:IOrder = data.data

  return order
}
