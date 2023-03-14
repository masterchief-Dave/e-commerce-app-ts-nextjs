import Link from 'next/link'

type Props = {}

export const AuthNavbar = (props: Props) => {
  const styles = {
    label: `text-[1.4rem] font-normal block mb-2`,
    input: `h-[3.5rem] w-full outline-0 px-4 border text-[1.4rem] focus:ring-1 rounded-md`,
    btn: `h-[3.5rem] w-full bg-primary-blue-100 text-white font-medium text-[1.4rem] rounded-md`,
  }

  return (
    <div className='max-h-screen font-poppins'>
      <nav className='grid grid-cols-12 bg-primary-blue-100 py-5'>
        <div className='col-start-2 col-end-12 flex items-center justify-between'>
          <h1 className='text-[2rem] font-black text-white'>Sage-Warehouse</h1>

          <button className='auth-btn bg-primary-yellow-100 text-primary-blue-100'>
            Sign up
          </button>
        </div>
      </nav>

      <section className='flex h-full w-full items-center justify-center py-16'>
        <form className='w-[30rem] max-w-[30rem] space-y-4 rounded-xl border py-4 px-6'>
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

          <button className={styles.btn}>Submit</button>

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
                <Link href='/auth/register' className='text-primary-yellow-200'>
                  Register here
                </Link>
              </span>{' '}
            </p>
          </div>
        </form>
      </section>
    </div>
  )
}
