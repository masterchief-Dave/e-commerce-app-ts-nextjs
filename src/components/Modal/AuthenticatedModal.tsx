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

type Props = {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthenticatedModal = ({ openModal, setOpenModal }: Props) => {

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleGoogleAuth = async () => {
    const response = await signIn('google', {
      redirect: false
    })

    console.log('response from google auth', { response })
  }

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
                  <section className="flex items-center justify-end">
                    <div className='cursor-pointer' onClick={handleCloseModal}>
                      <XMarkIcon className='h-8 w-8' />
                    </div>
                  </section>
                  <div className='relative flex items-center justify-between'>
                    <Dialog.Title
                      as="h3"
                      className="text-[1.6rem] text-left font-bold leading-6 text-gray-900"
                    >
                      Sign In
                    </Dialog.Title>

                    {/* <div className='cursor-pointer' onClick={handleCloseModal}>
                      <XMarkIcon className='h-8 w-8' />
                    </div> */}
                  </div>
                  <section>
                    <form className="flex flex-col gap-8">
                      <div>
                        <Input placeholder="Email" className="h-[4rem] text-[1.6rem]" />
                      </div>
                      <div>
                        <Input placeholder="Password" className="h-[4rem] text-[1.6rem]" />
                      </div>

                      <Button className="h-[4rem] text-[1.6rem]">Login</Button>
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
                        // router.push('http://localhost:8100/api/v1/auth/google')
                        handleGoogleAuth()
                      }
                      }
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
                  {/* <div>
                    <p className='text-center'>Or continue with</p>
                  </div> */}

                  {/* <div className='flex items-center justify-around gap-x-24'>
                    <LogosFacebook className='h-12 w-12' />
                    <Fa6BrandsSquareXTwitter className='h-12 w-12' />
                    <CibApple className='h-12 w-12' />
                    <LogosRedditIcon className='h-12 w-12' />
                  </div> */}

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


