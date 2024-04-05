import { Button } from "@/components/ui/button"
import { loginSchema, loginVal } from "@/lib/schema/auth.schema"
import { useFormik } from "formik"
import { InputContainer } from ".."
import { EyeIcon, EyeOffIcon, FingerprintIcon, UserIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ErrorLabel } from "@/components/ui/errorLabel"
import { useState } from "react"
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"
import Link from "next/link"
import FormError from "../form-error"
import Image from "next/image"
import Spinner from "@/components/molecules/spinner"

const styles = {
  label: ` font-normal block mb-2 text-sm`,
  input: ` border-0 outline-0 ring-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-offset-0`,
  btn: `h-[50px] w-full bg-primary-blue-500 font-medium  rounded-md`,
}
interface FormProps {
  handleSubmit: (email: string, password: string) => void
  error?: { state: boolean; message: string }
  isLoading: boolean
}

function LoginForm({ handleSubmit, error, isLoading }: FormProps) {
  const [show, setShow] = useState(false)

  const router = useRouter()
  const formik = useFormik<{ email: string; password: string }>({
    initialValues: loginVal,
    validationSchema: loginSchema,
    onSubmit: (values, formikHelpers) => {
      // console.log(values)
      handleSubmit(values.email, values.password)
    },
  })

  const toggle = () => {
    setShow(!show)
  }

  return (
    <div className="col-start-3 col-end-11 rounded-xl border py-4 px-6 space-y-4">
      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <header className="mb-8">
          <h1 className="text-left text-xl font-semibold">Sign in</h1>
          <p className=" text-primary-grey-100 font-normal">
            Choose your preferred sign in method
          </p>
        </header>
        <div>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <InputContainer className="mb-2">
            <UserIcon />
            <Input
              type="text"
              placeholder="Email Address"
              id="email"
              name="email"
              className={styles.input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </InputContainer>
          {formik.touched.email && formik.errors.email ? (
            <ErrorLabel text={formik.errors.email} />
          ) : null}
        </div>

        <div>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          {/* add fingerprint icon, makes it look really cool */}
          <InputContainer className="mb-2">
            <FingerprintIcon />
            <Input
              type={show ? "text" : "password"}
              placeholder="Password"
              id="password"
              name="password"
              className={`${styles.input} flex-1`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {show ? (
              <EyeOffIcon className="cursor-pointer" onClick={toggle} />
            ) : (
              <EyeIcon className="cursor-pointer" onClick={toggle} />
            )}
          </InputContainer>
          {formik.touched.password && formik.errors.password ? (
            <ErrorLabel text={formik.errors.password} />
          ) : null}
        </div>

        {/* <FormSuccess message="Mail sent" /> */}
        {error?.state && (
          <FormError message={error.message || "Invalid Credentials"} />
        )}

        <Button
          className={`h-[50px] w-full text-white btn rounded-md flex items-center justify-center`}
          type="submit"
          disabled={isLoading}
          variant={"primary"}
        >
          {isLoading && <Spinner className="text-white" />}
          <span>Submit</span>
        </Button>

        <div className="mb-8 text-sm flex justify-between">
          <div>
            <p className="">
              Dont have an account{" "}
              <span>
                <Link
                  href="/auth/register"
                  className="text-primary-yellow-200 font-medium underline underline-offset-2"
                >
                  Sign up
                </Link>
              </span>{" "}
            </p>
          </div>

          <Link
            href="/auth/forgot-password"
            className="font-medium text-primary-yellow-200 underline underline-offset-2"
          >
            Reset password
          </Link>
        </div>

        <div className="flex justify-center">
          <span className="inline-block h-[1px] "></span>
          <p className="font-semibold ">OR</p>
        </div>
      </form>

      <div className="space-y-4 col-start-2 col-end-12">
        <Button
          className={`h-[50px] border flex items-center justify-center gap-x-4 bg-white text-black hover:bg-black  hover:text-white`}
          type="submit"
          variant="primary"
          disabled={isLoading}
          onClick={(e) => {
            e.preventDefault()
            router.push(`${process.env.NEXT_PUBLIC_API_SERVER}/auth/google`)
            // router.push('http://localhost:8100/api/v1/auth/google')
            // handleGoogleAuth()
          }}
        >
          <p>Sign In with Google</p>
          <Image
            src="/assets/icons/google.svg"
            alt="Google"
            className="h-[13px] w-[13px]"
            width={1000}
            height={1000}
          />
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
