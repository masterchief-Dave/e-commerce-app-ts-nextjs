import { Footer } from '@/components/Footer'
import { AccountLayout } from '@/components/Layout/Account'
import { useFormik } from 'formik'

type Props = {}

interface FormData { }

const user = (props: Props) => {
  const styles = {
    label: `block text-[1.6rem] text-primary-grey-100 font-medium`,
    input: `p-4 w-full px-4 text-xl lg:text-[1.6rem] border font-medium`,
    editBtn: `px-8 py-2 lg:text-[1.6rem] bg-primary-blue-300 font-medium text-xl text-white rounded-md`,
  }

  // const formik = useFormik({}) 
  // fetch the user from the backend
  return (
    <div>
      <AccountLayout>
        <div>
          <header className='flex items-center justify-between border-b p-8'>
            <h1 className='text-xl font-black lg:text-2xl'>
              Account Information
            </h1>

            <button className={styles.editBtn}>Edit</button>
          </header>
          <form action='' className='space-y-4 p-8'>
            <div>
              <label htmlFor='firstname' className={styles.label}>
                {' '}
                Firstname{' '}
              </label>
              <input className={styles.input} />
            </div>

            <div>
              <label htmlFor='lastname' className={styles.label}>
                Last name{' '}
              </label>
              <input className={styles.input} />
            </div>

            <div>
              <label htmlFor='emailAddress' className={styles.label}>
                {' '}
                Email Address{' '}
              </label>
              <input className={styles.input} />
            </div>

            <div>
              <label htmlFor='currentPassword' className={styles.label}>
                {' '}
                Current Password
              </label>
              <input className={styles.input} />
            </div>

            <div>
              <label htmlFor='newPassword' className={styles.label}>
                {' '}
                New Password
              </label>
              <input className={styles.input} />
            </div>

            <div>
              <label htmlFor='confirmPassword' className={styles.label}>
                {' '}
                Confirm Password{' '}
              </label>
              <input className={styles.input} />
            </div>
            <button className='h-fit w-full rounded-md bg-primary-blue-300 py-4 text-[1.6rem] font-semibold text-white '>
              Save changes
            </button>
          </form>
        </div>
      </AccountLayout>
      <Footer />
    </div>
  )
}

export default user
