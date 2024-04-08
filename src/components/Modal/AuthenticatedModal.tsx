import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { InputContainer } from "../Form"
import { Input } from "../ui/input"
import { useFormik } from "formik"
import { loginSchema, loginVal } from "@/lib/schema/auth.schema"
import { ErrorLabel } from "../ui/errorLabel"
import { useRouter } from "next/router"
import AuthService from "@/lib/services/auth.service"
import axios from "axios"
import useAuth from "@/lib/hooks/useAuth"
import Spinner from "../molecules/spinner"
import { EyeIcon, EyeOffIcon, FingerprintIcon, UserIcon } from "lucide-react"
import { errorLogger } from "@/lib/utils/logger"

type Props = {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const styles = {
  input: `text-base border-0 ring-0 focus: outline-0 focus:ring-0 focus:ring-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-offset-0`,
}

const AuthenticatedModal = ({ openModal, setOpenModal }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const { setUser } = useAuth()
  const router = useRouter()
  const [show, setShow] = useState(false)
  const formik = useFormik({
    initialValues: loginVal,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true)
        const response = await AuthService.login({
          email: values.email,
          password: values.password,
        })

        if (response?.success) {
          setIsLoading(false)
          axios.defaults.headers.common["Authorization"] = response.user.token
          setUser({
            email: response.user.email,
            _id: response.user._id,
            name: response.user.name,
            photo: response.user.photo,
            token: response.user.token,
            role: response.user.role,
          })
          // router.push('/')
          setOpenModal(false)
        }
      } catch (err: any) {
        setIsLoading(false)
        errorLogger(err)
        // console.log(err)
      }
    },
  })
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const toggle = () => {
    setShow(!show)
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center" />

      <Transition appear show={openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10  font-rubik"
          onClose={handleCloseModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-8 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all space-y-8">
                  <div className="relative flex items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="font-bold leading-6 text-gray-900"
                    >
                      <section className="flex items-center justify-between">
                        <h1 className="font-medium text-2xl">Sign in</h1>
                      </section>
                    </Dialog.Title>
                    <div className="cursor-pointer" onClick={handleCloseModal}>
                      <XMarkIcon className="h-5 w-5" />
                    </div>
                  </div>
                  <section>
                    <form
                      className="flex flex-col gap-8"
                      onSubmit={formik.handleSubmit}
                    >
                      <div>
                        <InputContainer className="mb-2 h-[3rem]">
                          <UserIcon className="h-5 w-5" />
                          <Input
                            type="text"
                            placeholder="Email"
                            className={styles.input}
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                        </InputContainer>
                        {formik.touched.email && formik.errors.email && (
                          <ErrorLabel
                            text={formik.errors.email}
                            className="text-sm"
                          />
                        )}
                      </div>
                      <div>
                        <InputContainer className="mb-2 h-[3rem]">
                          <FingerprintIcon className="h-5 w-5" />
                          <Input
                            type={show ? "text" : "password"}
                            placeholder="Password"
                            className={styles.input}
                            value={formik.values.password}
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {show ? (
                            <EyeOffIcon
                              className="h-5 w-5 cursor-pointer"
                              onClick={toggle}
                            />
                          ) : (
                            <EyeIcon
                              className="h-5 w-5 cursor-pointer"
                              onClick={toggle}
                            />
                          )}
                        </InputContainer>
                        {formik.touched.password && formik.errors.password && (
                          <ErrorLabel
                            text={formik.errors.password}
                            className="text-sm"
                          />
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="h-[3rem]  bg-black text-white btn"
                      >
                        {isLoading && <Spinner className="text-white" />}
                        <span>Login</span>
                      </Button>
                    </form>
                  </section>

                  <div className="grid grid-cols-3 items-center">
                    <span className="h-[0.1px] w-full bg-slate-300"></span>
                    <p className="text-center flex-grow">Or continue with</p>
                    <span className="h-[0.1px] w-full bg-slate-300"></span>
                  </div>

                  {/* <div className="mt-2">
                    <p className=" text-gray-500">
                      Join Sage-Warehouse with just 1-click!
                    </p>
                  </div> */}
                  <div className="space-y-4 col-start-2 col-end-12">
                    <Button
                      className={`h-[3rem] w-full hover:bg-primary-blue-300   rounded-md flex items-center justify-center gap-x-4 border bg-white text-primary-blue-100 hover:text-white`}
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault()
                        router.push(
                          `${process.env.NEXT_PUBLIC_API_SERVER}/auth/google`
                        )
                      }}
                    >
                      <p>Sign In with Google</p>
                      <Image
                        src="/assets/icons/google.svg"
                        alt="Google"
                        className="h-[2rem] w-[2rem]"
                        width={1000}
                        height={1000}
                      />
                    </Button>
                  </div>
                  <div>
                    <p className="text-sm font-normal">
                      By registering for an Sage-Warehouse account, you agree
                      that you have read and accepted our Sage-Warehouse Free
                      Membership Agreement and{" "}
                      <Link
                        className="text-blue-500"
                        href="/legal/privacy-policy"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>

                  <footer className="flex items-center justify-center gap-x-2 text-sm">
                    <p>Don't have an account? </p>
                    <Link href="/auth/register" className="underline">
                      Create one
                    </Link>
                  </footer>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default AuthenticatedModal
