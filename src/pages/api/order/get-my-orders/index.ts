// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { connectToMongoDB } from '@/lib/mongodb'
import { Order } from '@/models/order'

type Data = {
  message: string
  data?: IOrder
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const session = await getSession({ req })

      if (!session) {
        return res.status(400).json({ message: 'Sign in to access this resource' })
      }
      await connectToMongoDB()
      // get all the orders where the user id is equal to === session._id
      // @ts-ignore
      const orders = await Order.find({ user: session._id }).populate('user')

      if (!orders || orders.length === 0 || orders.length < 1) {
        return res.status(200).json({
          message: 'You have not placed an order'
        })
      }

      res.status(200).json({
        message: 'ok',
        data: orders
      })
    } catch (err) {
      console.log(err)
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
