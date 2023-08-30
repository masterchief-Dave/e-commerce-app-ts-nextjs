// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from '@/models/product'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

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
      const session = await getSession({ req })

      if (session?.role !== 'admin') {
        return res.status(400).json({
          message: `You do not have permission to access this route`
        })
      }
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

/**
 * to delete a product is for 
 * 1. a logged in user
 * 2. the user should have admin previledges
 */