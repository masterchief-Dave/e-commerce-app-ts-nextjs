import Spinner from "@/components/molecules/spinner"
import useAuth from "@/lib/hooks/useAuth"
import { useRouter } from "next/router"
import { useEffect } from "react"

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = isAuthenticated
      if (!authenticated) {
        router.push("/auth/login")
      }
    }

    checkAuth()
  }, [])

  return (
    <div className="mx-auto w-full  max-w-screen-4xl min-h-screen">
      {isAuthenticated ? (
        children
      ) : (
        <div className="w-full flex items-center justify-center">
          <Spinner className="h-[40px] w-[40px]" />
        </div>
      )}
    </div>
  )
}

export default AuthWrapper
