import Spinner from "@/components/molecules/spinner"
import useAuth from "@/lib/hooks/useAuth"
import useRefreshToken from "@/lib/hooks/useRefreshToken"
import { useEffect, useState } from "react"

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const refreshToken = useRefreshToken()
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const verifyRefreshToken = async () => {

      try {
        await refreshToken()
      } catch (err) {
        console.log(err)
        setIsLoading(false)
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    !user?.token ? verifyRefreshToken() : setIsLoading(false)

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className='mx-auto w-full  max-w-screen-4xl min-h-screen'>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner className="h-[40px] w-[40px]" />
        </div>
      ) : (
        children
      )}
    </div>
  )
}

export default AuthWrapper