import axios from "axios"
import { NextApiRequest } from "next"

type Props = {
  req?: NextApiRequest,
  data: {
    password: string
    newPassword: string
  }
}

export const getUpdatePassword = async ({ req, data }: Props): Promise<any> => {
  const response = await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/update-password`, { data })

  return response.data
}