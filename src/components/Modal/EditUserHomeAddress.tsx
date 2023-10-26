import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PencilIcon } from 'lucide-react'

import { Input } from '../ui/input'
import { Button } from '../ui/button'

type Props = {
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

export default function EditUserAddressModal({ state, setState }: Props) {
  // let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setState(false)
  }

  function openModal() {
    setState(true)
  }

  const styles = {
    form: {
      input: `h-[4rem] w-full text-[1.6rem] font-normal`,
      label: `block text-[1.6rem] font-normal mb-1`
    }
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
       
      </div>

      <Transition appear show={state} as={Fragment}>
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
            <div className="fixed inset-0 bg-black bg-opacity-25 blur-md backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto font-jost">
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
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-8">
                  <Dialog.Title
                    as="div"
                    className="text-4xl mb-12 font-medium leading-6 text-gray-900 flex items-center justify-between"
                  >
                    <h3>Edit Address</h3>
                    <PencilIcon className='h-8 w-8'/>
                  </Dialog.Title>
                  <form className="mt-2 space-y-4 grid grid-cols-2 gap-8">
                    <div className='col-span-full'>
                      <label htmlFor="street" className={styles.form.label}>Street</label>
                      <Input id='street' className={styles.form.input} placeholder='' />
                    </div>

                    <div>
                      <label htmlFor='city' className={styles.form.label}>City</label>
                      <Input id='city' className={styles.form.input} placeholder='' />
                    </div>

                    <div>
                      <label htmlFor='phone-number' className={styles.form.label}>Phone Number</label>
                      <Input id='phone-number' className={styles.form.input} placeholder='' />
                    </div>

                    <div>
                      <label htmlFor='zip-code' className={styles.form.label}>Zip Code</label>
                      <Input id='zip-code' className={styles.form.input} placeholder='' />
                    </div>

                    <div>
                      <label htmlFor='country' className={styles.form.label}>Country</label>
                      <Input id='country' className={styles.form.input} placeholder='' />
                    </div>

                    <div className='col-span-full'>
                      <Button className='h-[4rem] bg-blue-500 w-full text-[1.6rem] font-medium'>Edit</Button>
                    </div>
                  </form>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

/**
 * street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        phoneNumber: req.body.phoneNumber,
        zipCode: req.body.zipCode,
        country: req.body.country
 */


/**
 *  
 * <button
      type="button"
      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      onClick={closeModal}
    >
      Got it, thanks!
    </button>
 */