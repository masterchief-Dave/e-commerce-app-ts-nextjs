import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

import { Button } from '../ui/button'
import { CibApple, Fa6BrandsSquareXTwitter, LogosFacebook, LogosRedditIcon } from '@/globals/icons'
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

type Props = {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthenticatedModal = ({ openModal, setOpenModal }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const { setUser } = useAuth()
  const router = useRouter()
  const formik = useFormik({
    initialValues: loginVal,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true)
        const response = await AuthService.login({ email: values.email, password: values.password })

        if (response?.success) {
          setIsLoading(false)
          axios.defaults.headers.common["Authorization"] = response.user.token
          setUser({
            email: response.user.email,
            _id: response.user._id,
            name: response.user.name,
            photo: response.user.photo,
            token: response.user.token
          })
          // router.push('/')
          setOpenModal(false)

          setTimeout(() => {
            window.location.reload()
          }, 1000)
        }
      } catch (err: any) {
        setIsLoading(false)
        console.log(err)
      }
    }
  })
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  console.log(router.asPath)

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center" />

      <Transition appear show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-10 text-[1.6rem] font-rubik" onClose={handleCloseModal}>
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all space-y-8">

                  <div className='relative flex items-center justify-between'>
                    <Dialog.Title
                      as="h3"
                      className="text-[1.6rem] font-bold leading-6 text-gray-900"
                    >
                      <section className="flex items-center justify-between">
                        <h1 className="font-medium text-3xl">Sign in</h1>
                      </section>
                    </Dialog.Title>
                    <div className='cursor-pointer' onClick={handleCloseModal}>
                      <XMarkIcon className='h-8 w-8' />
                    </div>
                  </div>
                  <section>
                    <form className="flex flex-col gap-8" onSubmit={formik.handleSubmit}>
                      <div>
                        <Input placeholder="Email" className="h-[4rem] text-[1.6rem]" value={formik.values.email} name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.email && formik.errors.email && <ErrorLabel text={formik.errors.email} className="text-[1.4rem]" />}
                      </div>
                      <div>
                        <Input placeholder="Password" className="h-[4rem] text-[1.6rem]" value={formik.values.password} name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.password && formik.errors.password && <ErrorLabel text={formik.errors.password} className="text-[1.4rem]" />}
                      </div>

                      <Button
                        type="submit"
                        className="h-[4rem] text-[1.6rem] bg-black text-white btn">
                        {isLoading ? (
                          <Spinner className="text-white" />
                        ) : (
                          <span>Login</span>
                        )}
                      </Button>
                    </form>
                  </section>

                  <div className="grid grid-cols-3 items-center">
                    <span className="h-[0.1px] w-full bg-slate-300"></span>
                    <p className='text-center flex-grow'>Or continue with</p>
                    <span className="h-[0.1px] w-full bg-slate-300"></span>
                  </div>

                  {/* <div className="mt-2">
                    <p className="text-[1.6rem] text-gray-500">
                      Join Sage-Warehouse with just 1-click!
                    </p>
                  </div> */}
                  <div className='space-y-4 col-start-2 col-end-12'>
                    <Button
                      className={`h-[4rem] w-full hover:bg-primary-blue-300  text-[1.6rem] rounded-md flex items-center justify-center gap-x-4 border bg-white text-primary-blue-100 hover:text-white`}
                      type='submit'
                      onClick={(e) => {
                        e.preventDefault()
                        router.push(`${process.env.NEXT_PUBLIC_API_SERVER}/auth/google`)
                      }}
                    >
                      <p>Sign In with Google</p>
                      <Image
                        src='/assets/icons/google.svg'
                        alt='Google'
                        className='h-[2rem] w-[2rem]'
                        width={1000}
                        height={1000}
                      />
                    </Button>
                  </div>
                  <div>
                    <p className='text-[1.4rem] font-normal'>
                      By registering for an Sage-Warehouse account, you agree that you have read and accepted our Sage-Warehouse Free Membership Agreement and <Link className='text-blue-500' href='/legal/privacy-policy'>Privacy Policy</Link>.
                    </p>
                  </div>

                  <footer className="flex items-center justify-center gap-x-2 text-[1.4rem]">
                    <p>Don't have an account? {" "}</p>
                    <Link href="/auth/register" className="underline">Create one</Link>
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


