"use client"

import { ReactNode } from "react"
import { SWRConfig } from "swr"
import { apiService } from "./helpers/apiService"

function SWRProvider({ children }: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher: apiService,
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