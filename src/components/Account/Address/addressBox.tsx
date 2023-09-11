import { MapPinIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'

type Props = {
  // setState: React.Dispatch<React.SetStateAction<number>>
  setState: (step: number) => void
}

export const AddressBox = ({ setState }: Props) => {
  return (
    <section>
      <header className='flex items-center justify-between border-b p-8'>
        <h1 className='text-xl font-black lg:text-2xl'>Delivery Address</h1>

        <button
          className='h-fit w-fit rounded-md bg-primary-red-100 px-4 py-2 text-[1.6rem] font-semibold text-white'
          id='newAddress'
          onClick={() => {
            setState(2)
          }}
        >
          {' '}
          Add new Address{' '}
        </button>
      </header>
      <div className='grid grid-cols-2 gap-8 p-8'>
        <div className='border'>
          <header className='border-b p-4'>
            <div className='flex justify-end'>
              <div>
                <button className='h-fit w-fit rounded-md px-4 py-2 text-[1.6rem] font-semibold'>
                  Edit
                </button>

                <button className='h-fit w-fit rounded-md px-4 py-2 text-[1.6rem] font-semibold text-primary-red-100'>
                  Delete
                </button>
              </div>
            </div>
          </header>

          <section className='space-y-4 p-8'>
            <div className='flex gap-x-2'>
              <UserIcon className='h-6 w-6' />
              <p>David Bodunrin</p>
            </div>

            <div className='flex gap-x-2'>
              <MapPinIcon className='h-6 w-6' />
              <p className='truncated'>
                2, Adisa Olarinde Dada street, Agbo-Igbala bustop off matogun
                road, ogun state
              </p>
            </div>

            <div className='flex gap-x-2'>
              <PhoneIcon className='h-6 w-6' />
              <p>0810-464-8031</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
