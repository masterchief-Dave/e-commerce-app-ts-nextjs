import Link from 'next/link'
import { useState } from 'react'
import { Layout } from '@/components/Layout'
import { AuthNavbar } from '@/components/Navbar/authNavbar'

type Props = {}

interface FormData {
  fullName: string
  password: string
  email: string
  confirmPassword: string
}

const Register = (props: Props) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    password: '',
    email: '',
    confirmPassword: '',
  })

  const handleForm = () => {
    // some code
  }

  const styles = {
    label: `text-[1.4rem] font-normal block mb-2`,
    input: `h-[3.5rem] w-full outline-0 px-4 border text-[1.4rem] focus:ring-1 rounded-md`,
    btn: `h-[3.5rem] w-full bg-primary-blue-500 hover:bg-primary-blue-300 text-white font-medium text-[1.4rem] rounded-md`,
  }

  return (
    <Layout>
      <div className='font-poppins'>
        <AuthNavbar />
        <section className='flex h-full w-full items-center justify-center py-16'>
          <form
            action=''
            className='w-[35rem] max-w-[40rem] space-y-4 rounded-xl border py-4 px-6'
          >
            <header>
              <h1 className='text-center text-[2rem] font-normal'>Register</h1>
            </header>

            <div>
              <label htmlFor='fullName' className={styles.label}>
                Full Name
              </label>
              <input
                type='text'
                placeholder='Firstname Lastname'
                id='fullName'
                name='fullName'
                className={styles.input}
              />
            </div>

            <div>
              <label htmlFor='email' className={styles.label}>
                Email Address
              </label>
              <input
                type='text'
                placeholder='Email Address'
                id='email'
                className={styles.input}
              />
            </div>

            <div>
              <label htmlFor='password' className={styles.label}>
                Password
              </label>
              <input
                type='password'
                placeholder='Password'
                id='password'
                className={styles.input}
              />
            </div>

            <div>
              <label htmlFor='confirmPassword' className={styles.label}>
                Confirm Password
              </label>
              <input
                type='password'
                placeholder='Confirm Password'
                id='confirmPassword'
                className={styles.input}
              />
            </div>

            <button className={styles.btn}>Submit</button>

            <div>
              <p>
                By clicking signup you agree to Sage-warehouse{' '}
                <span className='text-text-primary-link'>
                  <Link href='/legal/terms-and-condition'>
                    terms and condition
                  </Link>
                </span>
              </p>
            </div>

            <div className='text-[1.3rem]'>
              <p>
                Already have an account{' '}
                <span>
                  <Link href='/auth/login' className='text-primary-yellow-200'>
                    Login here
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export default Register
