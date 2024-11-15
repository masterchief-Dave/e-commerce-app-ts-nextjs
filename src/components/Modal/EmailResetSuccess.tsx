import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

type Props = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export const PasswordResetSuccess = ({ isOpen, setIsOpen }: Props) => {
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className="z-[99]">
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
                <Dialog.Panel className="w-1/3 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all space-y-8">
                  <header className="flex items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-[2rem] font-medium leading-6 text-gray-900"
                    >
                      Email sent successful
                    </Dialog.Title>
                    <div
                      onClick={closeModal}
                      className="cursor-pointer rounded-full p-1 bg-[#EFEFEF]"
                    >
                      <XMarkIcon className="h-10 w-10" />
                    </div>
                  </header>

                  <div className="mt-2">
                    <p className=" font-normal text-gray-500">
                      Your Password has been reset successfully. You can now
                      close this page.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-x-8">
                    <Link
                      href="/auth/login"
                      className=" delay-75 transition-all font-medium rounded-md px-4 py-2 hover:bg-primary-blue-500 hover:text-white"
                    >
                      Return to Sign in
                    </Link>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2  font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
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
