import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Layout } from '@/components/Layout'

type Props = {}

const ForgotPassword = (props: Props) => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  const handleAuthClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)
    const response = await axios.post('/api/auth/forgot-password', {
      email: email
    })

    if (response.status === 200) {
      setLoading(false)
    } else {
      setLoading(false)
    }

    console.log({ response })
    // router.push('/auth/forgot-password-email-sent')
  }

  return (
    <Layout>
      <div className='space-y-24 py-16 font-poppins'>
        <div className='px-12'>
          <p className='text-[1.4rem]'>
            Return to{' '}
            <span className='text-text-primary-link'>
              <Link href='/auth/login'>Sign in</Link>
            </span>
          </p>
        </div>

        <div className='flex items-center justify-center'>
          <section className='w-[35rem] max-w-[40rem] space-y-8 rounded-xl border px-8 py-4'>
            <h1 className='text-center text-[1.8rem] font-semibold'>
              Trouble Signin in ?
            </h1>
            <p className='text-[1.4rem] text-primary-grey-300'>
              We&#39;ve got your back! Just enter your email address and
              we&#39;ll send you a link with which you can reset your password
            </p>

            <form className='text-[1.4rem] mt-8'>
              <label htmlFor='email' className='block font-medium mb-2'>
                Email
              </label>
              <input
                type='text'
                placeholder='email'
                className='mb-4 h-[3.5rem] w-full rounded-md border px-4 font-normal focus:ring-1'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <button
                type='submit'
                className='h-[3.5rem] w-full rounded-md bg-blue-500 text-white hover:bg-primary-blue-300'
                onClick={handleAuthClick}
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default ForgotPassword
