import { Layout } from '@/components/Layout'
import { AuthNavbar } from '@/components/Navbar/authNavbar'
import Link from 'next/link'
import { signIn, getSession } from 'next-auth/react'
import { useState } from 'react'

type Props = {}

const Login = (props: Props) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const styles = {
    label: `text-[1.4rem] font-normal block mb-2`,
    input: `h-[3.5rem] w-full outline-0 px-4 border text-[1.4rem] focus:ring-1 rounded-md`,
    btn: `h-[3.5rem] w-full bg-primary-blue-100 text-white font-medium text-[1.4rem] rounded-md`,
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    signIn('credentials-login', { email, password })
  }

  return (
    <Layout>
      <div className='font-poppins'>
        <AuthNavbar />
        <section className='flex h-full w-full items-center justify-center py-16'>
          <form className='w-[35rem] max-w-[40rem] space-y-4 rounded-xl border py-4 px-6'>
            <header>
              <h1 className='text-center text-[2rem] font-normal'>Login</h1>
            </header>
            <div>
              <label htmlFor='email' className={styles.label}>
                Email Address
              </label>
              <input
                type='text'
                placeholder='Email Address'
                id='email'
                name='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
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
                name='password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                className={styles.input}
              />
            </div>

            <button className={styles.btn} onClick={handleSubmit} type='submit'>
              Submit
            </button>

            <div className='mb-8 flex justify-end'>
              <Link
                href='/forgot-password'
                className='text-[1.2srem] text-primary-yellow-200'
              >
                Forgot password
              </Link>
            </div>

            <div>
              <p className='text-[1.3rem]'>
                Dont have an account{' '}
                <span>
                  <Link
                    href='/auth/register'
                    className='text-primary-yellow-200'
                  >
                    Register here
                  </Link>
                </span>{' '}
              </p>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export default Login
