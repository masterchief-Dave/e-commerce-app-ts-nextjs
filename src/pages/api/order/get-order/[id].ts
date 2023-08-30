// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { Order } from '@/models/order'
import { connectToMongoDB } from '@/lib/mongodb'


type Data = {
  message: string
  data?: Order
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const session = await getSession({ req })

      if (!session?.role || session.role !== 'admin') {
        return res.status(400).json({
          message: `You do not have permission to access this route`
        })
      }
      await connectToMongoDB()

      // @ts-ignore
      const order = await Order.findById(req.query.id).populate('user')

      if (!order) return res.status(404).json({
        message: 'No order found'
      })

      res.status(200).json({
        message: 'ok',
        data: order
      })
    } catch (err) {
      console.log(err)
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
