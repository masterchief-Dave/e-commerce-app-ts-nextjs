import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { Layout } from '@/components/Layout'
import ResetEmailSentModal from '@/components/Modal/ResetEmailSent'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

type Props = {}

const ForgotPassword = (props: Props) => {
  const router = useRouter()
  let [isOpen, setIsOpen] = useState(true)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [notification, setNotification] = useState<null | string>('')

  const handleAuthClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    setShowModal(false)

    try {
      const response = await axios.post('/api/auth/forgot-password', {
        email: email
      })

      if (response.status === 200) {
        return setShowModal(true)

      } else {
        setShowModal(false)
        setNotification('Error encountered sending mail Try again!')

        setTimeout(() => {
          setNotification(null)
        }, 3000)
      }
    } catch (err) {
      setShowModal(false)
      setNotification('Error encountered sending mail Try again!')
      setTimeout(() => {
        setNotification(null)
      }, 3000)
    }
  }

  return (
    <Layout>
      <>
        {showModal && <ResetEmailSentModal email={email} setEmail={setEmail} isOpen={isOpen} setIsOpen={setIsOpen} />}
        <div className='space-y-24 py-16 '>
          {notification && (
            <div className='fixed left-0 right-0 text-center top-[1rem] flex items-center justify-center'>
              <div className='border border-dashed text-red-500 bg-white p-8 space-y-4'>
                <header className='flex justify-end'>
                  <div onClick={() => setNotification(null)}>
                    <XMarkIcon className='h-10 w-10' />
                  </div>
                </header>
                <p className='text-[1.6rem] font-medium'>{notification}</p>
              </div>
            </div>
          )
          }
          <div className='px-12'>
            <p className='text-[1.6rem]'>
              Return to{' '}
              <span className='text-text-primary-link'>
                <Link href='/auth/login'>Sign in</Link>
              </span>
            </p>
          </div>

          <div className='flex items-center justify-center'>
            <section className='w-[45rem] max-w-[45rem] space-y-8 rounded-xl border px-8 py-12'>
              <h1 className='text-center text-[1.8rem] font-semibold'>
                Trouble Signing in ?
              </h1>
              <p className='text-[1.6rem] text-primary-grey-300'>
                We&#39;ve got your back! Just enter your email address and
                we&#39;ll send you a link with which you can reset your password
              </p>

              <form className='text-[1.6rem] mt-8'>
                <label htmlFor='email' className='block font-medium mb-2'>
                  Email
                </label>
                <Input
                  type='text'
                  placeholder='Email'
                  className='mb-4 h-[4rem] text-[1.6rem] w-full rounded-md border px-4 font-normal focus:ring-1'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <Button
                  type='submit'
                  className='h-[4rem] btn text-[1.6rem] w-full rounded-md'
                  onClick={handleAuthClick}
                >
                  Submit
                </Button>
              </form>
            </section>
          </div>
        </div>
      </>
    </Layout>
  )
}

export default ForgotPassword

const ShowModal = () => {
  return (
    <div>
      Daddy wan !!!
    </div>
  )
}