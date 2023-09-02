// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Order } from '@/models/order'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'


type Data = {
  message: string
  data?: IOrder
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'PATCH') {
    try {
      const session = await getSession({ req })

      if (session?.role !== 'admin') {
        return res.status(400).json({
          message: `You do not have permission to access this route`
        })
      }
      const id = req.query.id

      // @ts-ignore
      const order = await Order.findById(id)

      if (order.orderStatus === 'Delivered' || order.orderStatus === 'Shipped') {
        return res.status(400).json({
          message: 'Order has been shipped'
        })
      }

      order.orderStatus = req.body.status
      await order.save({ validateBeforeSave: false, new: true })

      res.status(200).json({ message: 'ok, order status updated', data: order })
    } catch (err) {
      console.log(err)
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
