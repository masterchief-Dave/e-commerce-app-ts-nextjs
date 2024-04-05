import { apiService } from "@/lib/helpers/apiService"
import axios from "axios"

export const fetchRefresh = async () => {
  const response = await apiService(
    `${process.env.NEXT_PUBLIC_API_SERVER}/auth/refresh`,
    "POST",
    {}
  )

  console.log(response)
  return response
}
