// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  status: string
  data: {
    count: number
    length: number
    products: Product[]
  }
}

const baseUrl = `http://localhost:8100/api/v1`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products = await (
    await axios.get(`http://localhost:8100/api/v1/products`)
  ).data

  // console.log({ products })
  try {
    res.status(200).json({
      status: 'success',
      data: {
        count: products.count,
        length: products.length,
        products: products.data.products,
      },
    })
  } catch (err: any) {
    console.log(err.message)
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
