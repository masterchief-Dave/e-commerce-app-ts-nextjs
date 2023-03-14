type Props = {}

const ForgotPassword = (props: Props) => {
  return (
    <div className='space-y-24 py-16 font-poppins'>
      <div className='px-12'>
        <p className='text-[1.4rem]'>
          Retun to <span className='text-text-primary-link'>Sign in</span>
        </p>
      </div>

      <div className='flex items-center justify-center'>
        <section className='w-[35rem] max-w-[40rem] space-y-12 rounded-xl border px-8 py-4'>
          <h1 className='text-center text-[1.8rem] font-semibold'>
            Trouble Signin in ?
          </h1>
          <p className='text-[1.4rem] text-primary-grey-300'>
            We&#39;ve got your back! Just enter your email address and we&#39;ll
            send you a link with which you can reset your password
          </p>

          <div className='text-[1.4rem]'>
            <label htmlFor='email' className='block font-medium'>
              Email
            </label>

            <input
              type='text'
              placeholder='email'
              className='mb-4 h-[3.5rem] w-full rounded-md border px-4 font-normal focus:ring-1'
            />

            <button className='h-[3.5rem] w-full rounded-md bg-primary-blue-100 text-white'>
              Sign in
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ForgotPassword
