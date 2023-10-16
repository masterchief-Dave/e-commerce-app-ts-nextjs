/* eslint-disable no-unexpected-multiline */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '@/models/product'
import { connectToMongoDB } from '@/lib/mongodb'
import { apiFeatures } from '@/helpers/api-features'

type Data = {
  message: string
  // data?: 
}

type Product = {
  price: number
  stock: number
  numOfReviews: number
  ratings: number;
  [key: string]: any // Index signature
};

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

    let query: Product = {
      price: isObjectEmpty(priceQuery) ? 0 : priceQuery,
      stock: isObjectEmpty(stockQuery) ? 0 : stockQuery,
      numOfReviews: isObjectEmpty(reviewQuery) ? 0 : reviewQuery,
      ratings: isObjectEmpty(ratingQuery) ? 0 : ratingQuery
    }

    const arr = ['price', 'stock', 'numOfReviews', 'ratings']

    arr.forEach((param) => {
      if (query[param] === 0) {
        delete query[param]
      }
    })

    console.log('this is the query after removing,', query)

    await connectToMongoDB()
    // @ts-ignore
    const product = await Product.find(query).sort(req.query.sort)

    console.log(query)
    console.log({ product })

    res.end()
  } catch (err) {
    console.log(err)
  }

}

/**
 * api endpoint to test query params
 * 
 * getmyproducts?minPrice=2000&minRating=4&sort=-price
 */