// http://localhost:8100/api/v1/user/test
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from "next-auth/jwt"

type Data = {
  message: string
  // data: 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = await getToken({ req })
  console.log('the api is in the get test')

  console.log({ token })

  const response = await axios.get('http://localhost:8100/api/v1/user/test', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  console.log(response)
  res.status(200).json({
    message: 'server response'
  })
}
