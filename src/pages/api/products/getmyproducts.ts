// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '@/models/product'
import { connectToMongoDB } from '@/lib/mongodb'
import { apiFeatures } from '@/helpers/api-features'

type Data = {
  message: string
  // data?: 
}

function isObjectEmpty(obj: any) {
  // Check if it's an object (not null) and has no properties
  return obj !== null && Object.keys(obj).length === 0
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    return res.status(405).end() // Handle only GET requests
  }

  try {
    const { minPrice, maxPrice, minStock, maxStock, minReview, maxReview, minRating, maxRating } = req.query

    console.log(req.query)

    const { priceQuery, stockQuery, reviewQuery, ratingQuery } = apiFeatures(minPrice as string, maxPrice as string, minStock as string, maxStock as string, minReview as string, maxReview as string, minRating as string, maxRating as string)

    const query = {
      price: isObjectEmpty(priceQuery) ? 0 : priceQuery,
      stock: isObjectEmpty(stockQuery) ? 0 : stockQuery,
      numOfReviews: isObjectEmpty(reviewQuery) ? 0 : reviewQuery,
      ratings: isObjectEmpty(ratingQuery) ? 0 : ratingQuery
    }

    console.log(query)

    await connectToMongoDB()
    // @ts-ignore
    const product = await Product.find(query)
    console.log({ product })

    res.end()
  } catch (err) {
    console.log(err)
  }

}
