"use client"

import Link from "next/link"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import axios from "axios"
import { loginUser } from "@/helpers"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AuthLayout from "@/components/Layout/Auth"
import { ErrorLabel } from "@/components/ui/errorLabel"
import { InputContainer } from "@/components/Form"
import {
  EyeIcon,
  EyeOffIcon,
  FingerprintIcon,
  MailIcon,
  UserIcon,
} from "lucide-react"
import { registerSchema, registerVal } from "@/lib/schema/auth.schema"
import { useState } from "react"
import { errorLogger, info } from "@/lib/utils/logger"
import useAuth from "@/lib/hooks/useAuth"
import AuthService from "@/lib/services/auth.service"
import Spinner from "@/components/molecules/spinner"
import { useToast } from "@/components/ui/use-toast"

interface FormData {
  name: string
  password: string
  email: string
  confirmPassword: string
}

const Register = () => {
  const { setUser } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  })
  const { toast } = useToast()

  const formik = useFormik<FormData>({
    initialValues: registerVal,
    validationSchema: registerSchema,
    onSubmit(values, formikHelpers) {
      handleSubmit(values)
    },
  })

  const styles = {
    label: `text-[1.6rem] font-normal block mb-2`,
    input: `text-[1.6rem] border-0 outline-0 ring-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-offset-0`,
    btn: `h-[5rem] w-full bg-primary-blue-500 hover:bg-primary-blue-300 text-white font-medium text-[1.6rem] rounded-md`,
    icon: `cursor-pointer w-8 h-8`,
  }

  const handleSubmit = async ({
    name,
    email,
    password,
    confirmPassword,
  }: FormData) => {
    setIsLoading(true)
    const response = await AuthService.register({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })

    if (response.success) {
      setIsLoading(false)
      // save user in session
      axios.defaults.headers.common["Authorization"] = response.user.token
      setUser({
        _id: response.user._id,
        name: response.user.name,
        email: response.user.email,
        photo: response.user.photo,
        token: response.user.token,
        role: response.user.role,
      })
      toast({
        variant: "success",
        title: "Registration Successful!",
        description: "Happy Shopping!",
      })
      return router.push("/")
    } else {
      setIsLoading(false)
      toast({
        variant: "destructive",
        title: "Error",
        description: "An Error Occured",
      })
      errorLogger({
        url: router.asPath,
        message: "An error occured in the register page",
        err: null,
      })
    }
  }

  const handleToggle = (name: string, state: boolean) => {
    setShow((prev) => {
      return {
        ...prev,
        [name]: !prev[name as keyof typeof show],
      }
    })
  }

  return (
    <AuthLayout>
      <section className="h-fit w-full grid grid-cols-12">
        <form
          action=""
          className="col-start-3 col-end-11 space-y-4 rounded-2xl border p-8"
          onSubmit={formik.handleSubmit}
        >
          <header className="mb-8">
            <h1 className="text-left text-[2rem] font-semibold">Sign up</h1>
            <p className="text-[1.6rem] text-primary-grey-100 font-normal">
              Choose your preferred sign in method
            </p>
          </header>

          <div>
            <label htmlFor="fullName" className={styles.label}>
              Full Name
            </label>
            <InputContainer className="mb-2">
              <UserIcon className="h-8 w-8" />
              <Input
                type="text"
                placeholder="Firstname Lastname"
                id="fullName"
                name="name"
                className={styles.input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
            </InputContainer>
            {formik.touched.name && formik.errors.name ? (
              <ErrorLabel text={formik.errors.name} />
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>
            <InputContainer className="mb-2">
              <MailIcon className="h-8 w-8" />
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
            <InputContainer className="mb-2">
              <FingerprintIcon className="h-8 w-8" />
              <Input
                type={show.password ? "text" : "password"}
                placeholder="Password"
                id="password"
                name="password"
                className={styles.input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {show.password ? (
                <EyeOffIcon
                  className={styles.icon}
                  onClick={() => handleToggle("password", false)}
                />
              ) : (
                <EyeIcon
                  className={styles.icon}
                  onClick={() => handleToggle("password", true)}
                />
              )}
            </InputContainer>
            {formik.touched.password && formik.errors.password ? (
              <ErrorLabel text={formik.errors.password} />
            ) : null}
          </div>

          <div>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password
            </label>
            <InputContainer className="mb-2">
              <FingerprintIcon className="h-8 w-8" />
              <Input
                type={show.confirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                className={styles.input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {show.confirmPassword ? (
                <EyeOffIcon
                  className={styles.icon}
                  onClick={() => handleToggle("confirmPassword", false)}
                />
              ) : (
                <EyeIcon
                  className={styles.icon}
                  onClick={() => handleToggle("confirmPassword", true)}
                />
              )}
            </InputContainer>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <ErrorLabel text={formik.errors.confirmPassword} />
            ) : null}
          </div>

          <Button
            type="submit"
            variant="primary"
            className="h-[5rem] btn flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading && <Spinner className="h-10 w-10 text-white" />}{" "}
            <span>Submit</span>
          </Button>

          {/* <div>
              <p>
                By clicking signup you agree to Sage-warehouse{' '}
                <span className='text-text-primary-link'>
                  <Link href='/legal/terms-and-condition'>
                    terms and condition
                  </Link>
                </span>
              </p>
            </div> */}

          <div className="text-[1.6rem]">
            <p>
              Already have an account{" "}
              <span>
                <Link
                  href="/auth/login"
                  className="text-primary-yellow-200 underline underline-offset-2 font-medium"
                >
                  Login here
                </Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    </AuthLayout>
  )
}

export default Register
