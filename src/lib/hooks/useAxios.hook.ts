import { globalAxios } from "@/helpers/apiService"
import { useEffect } from 'react'
import useRefreshToken from "./useRefreshToken"
import useAuth from "./useAuth"

const useAxiosPrivate = () => {
  const refresh = useRefreshToken()
  const { user } = useAuth()

  useEffect(() => {
    if (user && user?._id.length < 1) return

    const requestInterceptor = globalAxios.interceptors.request.use((config) => {
      if (!config.headers['Authorization']) {
        config.headers['Authorization'] = user?.token
      }

      return config
    }, (error) => Promise.reject(error))

    const responseInterceptor = globalAxios.interceptors.response.use((response) => response, async (error) => {
      const prevRequest = error?.config

      // console.log('error response', error.response.status)
      if (error.response.status === 401 && !prevRequest?.sent) {
        prevRequest.sent = true
        const newAccessToken = await refresh()
        prevRequest.headers['Authorization'] = newAccessToken
        return globalAxios(prevRequest)
      }

      return Promise.reject(error)
    })

    return () => {
      globalAxios.interceptors.request.eject(requestInterceptor)
      globalAxios.interceptors.response.eject(responseInterceptor)
    }
  }, [user, refresh])

  return globalAxios
}

export default useAxiosPrivate