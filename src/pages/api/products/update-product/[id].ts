// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from '@/models/product'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  data?: Product
}

// http://localhost:3002/api/products/update-product/1 method=== PATCH
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'PATCH') {
    try {
      const id = req.query.id
      // @ts-ignore
      let product = await Product.findById(id)
      if (!product) {
        return res.status(404).json({ message: 'Not found' })
      }
      // @ts-ignore
      product = await Product.findByIdAndUpdate(id, req.body, {
        runValidators: true,
        new: true
      })

      res.status(200).json({ message: 'success', data: product })
    } catch (err) {
      res.status(400).json({ message: 'Bad request' })
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}