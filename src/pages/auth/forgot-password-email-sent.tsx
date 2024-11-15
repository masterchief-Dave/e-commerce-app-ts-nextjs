import AuthLayout from "@/components/Layout/Auth"
import { useRouter } from "next/router"

type Props = {}

const ForgotPasswordEmailSent = (props: Props) => {
  const router = useRouter()

  return (
    <AuthLayout>
      <div className="space-y-12 py-12">
        <div className="flex items-center justify-center">
          <section className="w-[35rem] max-w-[40rem] space-y-12 rounded-xl border px-8 py-4">
            <h1 className="text-center text-[1.8rem] font-semibold">
              Email Sent
            </h1>
            <p className=" text-primary-grey-300">
              A link to reset your password has been sent to your email.
            </p>

            <button
              className="h-[3.5rem] w-full rounded-md bg-primary-blue-500  text-white hover:bg-primary-blue-300"
              onClick={() => router.push("/auth/login")}
            >
              Return to Sign in
            </button>
          </section>
        </div>
      </div>
    </AuthLayout>
  )
}

export default ForgotPasswordEmailSent
