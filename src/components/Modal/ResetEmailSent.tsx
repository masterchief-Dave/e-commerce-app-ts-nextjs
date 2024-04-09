import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { Fragment } from "react"
import { Button } from "../ui/button"

type Props = {
  email: string
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  setEmail: (value: string) => void
}

export default function ResetEmailSentModal({
  email = "bodunrindavidbond@gmail.com",
  setEmail,
  isOpen = true,
  setIsOpen,
}: Props) {
  function closeModal() {
    setEmail("")
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="z-[999999] font-jost">
      {/* <div className="fixed inset-0 flex items-center justify-center bg-[#000]/70" /> */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all space-y-8">
                  <header className="flex items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900 font-rubik"
                    >
                      Email sent successful
                    </Dialog.Title>
                    <div
                      onClick={closeModal}
                      className="cursor-pointer rounded-full p-1 bg-[#EFEFEF]"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </div>
                  </header>

                  <div className="mt-2">
                    <p className=" font-normal text-gray-500 font-rubik">
                      A link to reset your password has been sent to you on{" "}
                      <span className="font-medium"> {email} </span>.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-x-8 font-rubik">
                    <Link
                      href="/auth/login"
                      className="underline underline-offset-2 delay-75 transition-all rounded-md px-4 py-2 hover:bg-primary-blue-500 hover:text-white"
                    >
                      Return to Sign in
                    </Link>

                    <Button
                      type="button"
                      className="w-fit inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 hover:text-black"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
