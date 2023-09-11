import { Layout } from '@/components/Layout'
import { useRouter } from 'next/router'

type Props = {}

const ForgotPasswordEmailSent = (props: Props) => {
  const router = useRouter()

  return (
    <Layout>
      <div className='space-y-24 py-16 '>
        <div className='flex items-center justify-center'>
          <section className='w-[35rem] max-w-[40rem] space-y-12 rounded-xl border px-8 py-4'>
            <h1 className='text-center text-[1.8rem] font-semibold'>
              Email Sent
            </h1>
            <p className='text-[1.6rem] text-primary-grey-300'>
              A link to reset your password has been sent to you on
              bodunrindavidbond@gmail.com
            </p>

            <button
              className='h-[3.5rem] w-full rounded-md bg-primary-blue-500 text-[1.6rem] text-white hover:bg-primary-blue-300'
              onClick={() => router.push('/auth/login')}
            >
              Return to Sign in
            </button>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default ForgotPasswordEmailSent

