// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
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
