import * as Yup from "yup"
import { useState } from "react"
import { useRouter } from "next/router"
import { useFormik } from "formik"
import axios from "axios"

import { Layout } from "@/components/Layout"
import { PasswordResetSuccess } from "@/components/Modal/EmailResetSuccess"
import HomeWrapper from "@/components/Layout/Home"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AuthService from "@/lib/services/auth/auth.service"
import { useToast } from "@/components/ui/use-toast"
import { errorLogger } from "@/lib/utils/logger"
import Spinner from "@/components/molecules/spinner"
import { InputContainer } from "@/components/Form"
import { EyeIcon, EyeOffIcon } from "lucide-react"

type Props = {}

interface FormValues {
  password: string
  passwordConfirm: string
}

const ResetPassword = (props: Props) => {
  const styles = {
    label: ` font-normal block mb-2`,
    input: `w-full outline-0 border-0 outline-0 ring-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-offset-0 text-base  focus:ring-1 rounded-md`,
    btn: `w-full bg-black text-white font-medium  rounded-md flex items-center gap-x-2 justify-center`,
    icon: `h-5 w-5`,
  }
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()
  const queryString = router.asPath.split("/")[3]
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  })

  const handleToggle = (name: string, state: boolean) => {
    setShow((prev) => {
      return {
        ...prev,
        [name]: !prev[name as keyof typeof show],
      }
    })
  }
  const handleSubmit = async ({ password, passwordConfirm }: FormValues) => {
    try {
      // const response = await axios.post(
      //   `http://localhost:3002/api/auth/reset-password/${queryString}`,
      //   {
      //     password,
      //     passwordConfirm,
      //   }
      // )
      setIsLoading(true)
      const response = await AuthService.resetPassword(queryString, {
        password,
        confirmPassword: passwordConfirm,
      })
      console.log(response)
      if (response.status === 200) {
        setIsLoading(false)
        toast({
          variant: "success",
          title: "Password Changed",
          description:
            "Your password has been updated, login with your new password",
        })
        router.push("/auth/login")
      }
    } catch (err) {
      setIsLoading(false)
      toast({
        variant: "destructive",
        title: "Error Chaning Password",
        description: "An Error occured Try again!",
      })
      errorLogger({
        url: router.asPath,
        err: err,
        message: "Error resetting password",
      })
    }
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .required("Password is required")
        .min(6, "Mininum of 6 characters"),
      passwordConfirm: Yup.string()
        .required("")
        .min(6)
        .oneOf([Yup.ref("password")], "Passwords do not match"),
    }),
    onSubmit: (formValues) => {
      handleSubmit(formValues)
    },
  })

  return (
    <HomeWrapper>
      <>
        <div className="py-24 font-rubik">
          <div className="flex items-center justify-center">
            <section className="max-w-xl w-full space-y-12 rounded-lg border px-8 py-4">
              <header>
                <h1 className="text-center text-xl font-medium">
                  Reset Password
                </h1>
              </header>

              <form
                action=""
                className="space-y-4 "
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label htmlFor="newPassword">New Password</label>
                  <InputContainer className="mb-2">
                    <Input
                      type={show.password ? "text" : "password"}
                      id="newPassword"
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
                  {formik.errors.password && formik.touched.password && (
                    <p className="text-sm text-red-500">
                      {formik.errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <InputContainer className="mb-2">
                    <Input
                      type={show.confirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="passwordConfirm"
                      className={styles.input}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.passwordConfirm}
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
                  {formik.errors.passwordConfirm &&
                    formik.touched.passwordConfirm && (
                      <p className="text-sm text-red-500">
                        {formik.errors.passwordConfirm}
                      </p>
                    )}
                </div>
                <Button type="submit" className={styles.btn}>
                  {isLoading && <Spinner className="w-5 h-5 text-white" />}
                  <span>Submit</span>
                </Button>
              </form>
            </section>
          </div>
        </div>
        <PasswordResetSuccess isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    </HomeWrapper>
  )
}

export default ResetPassword
