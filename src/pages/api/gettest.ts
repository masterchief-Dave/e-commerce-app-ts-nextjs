// http://localhost:8100/api/v1/user/test
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from "next-auth/jwt"
import { getSession } from 'next-auth/react'

type Data = {
  message: string
  // data: 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = await getToken({ req, raw: true })
  const session = await getSession({ req })


  const response = await axios.get(`http://localhost:8100/api/v1/user/test/${session?._id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const data = await response.data


  res.status(200).json({
    message: 'server response'
  })
}
