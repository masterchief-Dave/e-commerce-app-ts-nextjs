import { useEffect, useState } from "react"
// import refreshtoken
// import useauth

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  // const refresh = useRefreshToken()
  // const {auth} = useAuth()

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        // await refresh() 
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    // !auth.accessToken ? verifyRefreshToken() : setIsLoading(false)
  }, [])
}

export default PersistLogin