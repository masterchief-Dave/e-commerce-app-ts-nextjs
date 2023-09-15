import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'


export const AddressForm = () => {
  const styles = {
    input: `text-[1.6rem] font-medium border h-[4rem] w-full px-4`,
    label: `text-[1.6rem] font-medium text-primary block`,
  }

  return (
    <div>
      <header className='flex items-center justify-between border-b p-8'>
        <Link
          href='/account/delivery-address'
          className='flex cursor-pointer items-center gap-x-2 p-3 font-medium transition-all delay-75 rounded-md text-[1.6rem] hover:bg-blue-500 hover:text-white'
        >
          <ArrowLeftIcon className='h-6 w-6' />
          <p>Go back</p>
        </Link>
      </header>
      <form action='' className='grid grid-cols-2 gap-8 p-8'>
        <div>
          <label htmlFor='firstname' className={styles.label}>
            Firstname
          </label>
          <input type='text' id='firstname' className={styles.input} />
        </div>

        <div>
          <label htmlFor='lastname' className={styles.label}>
            Lastname
          </label>
          <input type='text' id='lastname' className={styles.input} />
        </div>

        <div className='col-span-full'>
          <label htmlFor='phoneNumber' className={styles.label}>
            {' '}
            phone Number{' '}
          </label>
          <input type='text' id='phoneNumber' className={styles.input} />
        </div>

        <div className='col-span-full'>
          <label htmlFor='address' className={styles.label}>
            Address
          </label>
          <input type='text' placeholder='Address' className={styles.input} />
        </div>

        <div>
          <label htmlFor='state' className={styles.label}>
            State
          </label>
          <select name='' id='' className={`border ${styles.input}`}>
            <option
              value=''
              className='text-[1.2rem] italic text-primary-grey-200'
              disabled
            >
              Select State
            </option>
            <option value='lagos'>Lagos</option>
          </select>
        </div>

        <div>
          <label htmlFor='zipCode' className={styles.label}>
            Zip Code
          </label>
          <input
            type='text'
            className={`${styles.input}`}
            placeholder='Zip Code'
          />
        </div>

        <div className='col-span-full'>
          <button className='h-[4rem] w-full bg-primary-blue-300 text-[1.6rem] font-semibold text-white'>
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}
