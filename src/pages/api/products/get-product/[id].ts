// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '@/models/product'
import { connectToMongoDB } from '@/lib/mongodb'

type Data = {
  message: string,
  data?: Product
}

// http://localhost:3002/api/products/get-product/646e87919b081db85fa682e8 METHOD === GET
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const id = req.query.id

      // @ts-ignore
      const product = await Product.findById(id)
      res.status(200).json({ message: 'John Doe', data: product })
    } catch (err) {
      res.status(400).json({
        message: 'error'
      })
    }
  } else {
    return res.status(405).json({ message: 'method is not allowed' })
  }
}
