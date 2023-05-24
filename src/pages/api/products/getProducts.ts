// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  status: string
  message?: string
  data?: {
    count: number
    length: number
    products: Product[]
  }
  err?: unknown
}

const baseUrl = `http://localhost:8100/api/v1`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // //{{url}}/products?page=1
    const products = await (
      await axios.get(`http://localhost:8100/api/v1/products`)
    ).data

    // console.log({ products })
    res.status(200).json({
      status: 'success',
      data: {
        count: products.count,
        length: products.length,
        products: products.data.products,
      },
    })
  } catch (err: any) {
    // console.log('the code is in the catch block')
    // console.log(err.message)
    res.status(400).json({
      status: 'Error',
      message: 'Error',
      err: err,
      data: {
        count: 0,
        length: 0,
        products: [],
      },
    })
  }
}

// when I fetch my data from here that is when I can do things like getServerSideProps or getStaticProps.

/**
 * Requests
 * 1. fetch all products
 * 2. update a single product
 * 3. delete a single product
 * 4. fetch a single product
 * 5. create a single product
 *
 *  */
