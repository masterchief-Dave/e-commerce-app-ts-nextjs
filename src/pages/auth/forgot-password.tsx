import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import ResetEmailSentModal from "@/components/Modal/ResetEmailSent"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AuthService from "@/lib/services/auth/auth.service"
import { useToast } from "@/components/ui/use-toast"
import { errorLogger } from "@/lib/utils/logger"
import Spinner from "@/components/molecules/spinner"
import AuthLayout from "@/components/Layout/Auth"

type Props = {}

const ForgotPassword = (props: Props) => {
  const router = useRouter()
  let [isOpen, setIsOpen] = useState(true)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleAuthClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    setShowModal(false)

    try {
      // const response = await axios.post("/api/auth/forgot-password", {
      //   email: email,
      // })
      setIsLoading(true)
      const response = await AuthService.forgotPassword(email)

      if (response.status === 200) {
        setIsLoading(false)
        return setShowModal(true)
      } else {
        setIsLoading(false)
        setShowModal(false)
        toast({
          variant: "destructive",
          title: "Error",
          description: "Error encountered sending mail Try again!",
        })
      }
    } catch (err) {
      setIsLoading(false)
      setShowModal(false)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Error encountered sending mail Try again!",
      })
      errorLogger({
        err: err,
        message: "Error encountered sending mail Try again!",
        url: router.asPath,
      })
    }
  }

  return (
    <AuthLayout>
      <div>
        {showModal && (
          <ResetEmailSentModal
            email={email}
            setEmail={setEmail}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
        <div className="space-y-12 py-16">
          <div className="flex items-center justify-start">
            <p className="">
              Return to{" "}
              <span className="text-text-primary-link">
                <Link href="/auth/login">Sign in</Link>
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center">
            <section className="w-xl max-w-xl space-y-8 rounded-xl border p-8">
              <h1 className="text-center text-2xl font-semibold">
                Trouble Signing in ?
              </h1>
              <p className=" text-primary-grey-300">
                We&#39;ve got your back! Just enter your email address and
                we&#39;ll send you a link with which you can reset your password
              </p>

              <form className=" mt-8">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <Input
                  type="text"
                  placeholder="Email"
                  className="mb-4 w-full rounded-md border px-4 font-normal focus:ring-1"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <Button
                  type="submit"
                  className="btn flex items-center justify-center w-full rounded-md gap-x-2"
                  onClick={handleAuthClick}
                >
                  {isLoading && <Spinner className="h-5 w-5 text-white" />}
                  <span>Submit</span>
                </Button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}

export default ForgotPassword
