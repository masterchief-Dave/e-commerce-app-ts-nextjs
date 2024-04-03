import { apiService } from "@/lib/helpers/apiService"
import axios from "axios"

export const fetchUserOrder = async (id: string, req: any) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_SERVER}/order/${id}`,
    {
      headers: {
        Authorization: req.headers.get("Authorization"),
      },
    }
  )

  const data = await response.data
  console.log({ data })

  return []
}
