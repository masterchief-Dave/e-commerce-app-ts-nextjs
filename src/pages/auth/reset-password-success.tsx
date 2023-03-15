import { useRouter } from 'next/router'

type Props = {}

const ResetPasswordSuccess = (props: Props) => {
  const router = useRouter()

  return (
    <div>
      <div className='space-y-24 py-16 font-poppins'>
        <div className='flex items-center justify-center'>
          <section className='w-[35rem] max-w-[40rem] space-y-12 rounded-xl border px-8 py-4'>
            <h1 className='text-center text-[1.8rem] font-semibold'>
              Email Sent
            </h1>
            <p className='text-[1.4rem] text-primary-grey-300'>
              Your password reset has been successful.
            </p>

            <button
              className='h-[3.5rem] w-full rounded-md bg-primary-blue-100 text-[1.4rem] text-white'
              onClick={() => router.push('/auth/login')}
            >
              Return to Sign in
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordSuccess
