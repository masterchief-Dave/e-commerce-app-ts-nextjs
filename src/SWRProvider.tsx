"use client"

import { ReactNode } from "react"
import { SWRConfig } from "swr"
// import { apiService } from "./helpers/apiService"
import globalAxios from '@/lib/hooks/useAxios.hook'

function SWRProvider({ children }: { children: ReactNode }) {
  const axiosInstance = globalAxios()

  return (
    <SWRConfig
      value={{
        fetcher: axiosInstance,
        // refreshInterval: 3000,
        // revalidateIfStale: false,
        // revalidateOnFocus: false,
        // revalidateOnReconnect: false,
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SWRProvider