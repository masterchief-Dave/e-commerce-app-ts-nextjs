// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from '@/models/product'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

// http://localhost:3002/api/products/delete-product/1 METHOD === DELETE
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'DELETE') {
    try {
      const id = req.query.id
      // @ts-ignore
      const product = await Product.findById(id)
      if (!product) {
        return res.status(404).json({ message: 'Product not found' })
      }

      await Product.findByIdAndDelete(id)
      res.status(200).json({ message: 'product deleted' })
    } catch (err) {
      // 
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
