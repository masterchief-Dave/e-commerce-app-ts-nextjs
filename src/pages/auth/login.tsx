import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout } from '@/components/Layout'
import { AuthNavbar } from '@/components/Navbar/authNavbar'

import { signIn, getSession, useSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import { useAppDispatch } from '@/hooks/reduxhooks'
import { loginFailure, loginStart, loginSuccess } from '@/features/login/loginSlice'
import Cookies from 'js-cookie'

type Props = {}

const Login = (props: Props) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { data: session } = useSession()
  // console.log({ session })

  const styles = {
    label: `text-[1.4rem] font-normal block mb-2`,
    input: `h-[3.5rem] w-full outline-0 px-4 border text-[1.4rem] focus:ring-1 rounded-md`,
    btn: `h-[3.5rem] w-full bg-primary-blue-500 hover:bg-primary-blue-300  font-medium text-[1.4rem] rounded-md`,
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      dispatch(loginStart())

      const response = await fetch('http://localhost:8100/api/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        const user: User = await response.json()
        Cookies.set('authLoginToken', user?.token!, { expires: 1, secure: true })
        // Save user data to local storage
        const userData = {
          name: user.user.name,
          email: user.user.email,
          photo: user.user.avatar.url,
          id: user.user._id
        }
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(loginSuccess({
          success: user.success,
          token: user.token,
          user: user.user
        }))
      } else {
        const error = response.statusText
        dispatch(loginFailure(error))
      }
    } catch (err: any) {
      console.log(err)
      dispatch(loginFailure(err.message))
    }

  }

  // handle google auth
  const handleGoogleAuth = async (e: any) => {
    e.preventDefault()
    // create a post request with the user email as a means of identification and then send a callback url: to my server with the data to get the user id and stuff like that
    signIn('google', { callbackUrl: 'http://localhost:3002', redirect: true })
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
              {/* add fingerprint icon, makes it look really cool */}
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

            <button
              className={`${styles.btn} text-white`}
              onClick={handleSubmit}
              type='submit'
            >
              Submit
            </button>

            <div className='mb-8 flex justify-end'>
              <Link
                href='/auth/forgot-password'
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

            <div className='flex justify-center'>
              <span className='inline-block h-[1px] '></span>
              <p className='font-bold'>OR</p>
            </div>

            <div className='space-y-4'>
              <button
                className={`${styles.btn} flex items-center justify-center gap-x-4 border bg-white text-primary-blue-100`}
                onClick={handleGoogleAuth}
              >
                <p>Sign In with Google</p>
                <Image
                  src='/assets/icons/google.svg'
                  alt='Google'
                  className='h-[13px] w-[13px]'
                  width={1000}
                  height={1000}
                />
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export default Login
