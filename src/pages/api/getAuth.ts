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

/**
 * questions
 * 1. do I want to cache the login details of my user with react-query
 * 2. do I want to use next-auth with session and store the data inside of the localstorage, stuff like that
 * 3.
 *  */
