import { Layout } from '@/components/Layout'

type Props = {}

const ResetPassword = (props: Props) => {
  const styles = {
    label: `text-[1.4rem] font-normal block mb-2`,
    input: `h-[3.5rem] w-full outline-0 px-4 border text-[1.4rem] focus:ring-1 rounded-md`,
    btn: `h-[3.5rem] w-full bg-primary-blue-100 text-white font-medium text-[1.4rem] rounded-md`,
  }

  return (
    <Layout>
      <div className='py-16 font-poppins'>
        <div className='flex items-center justify-center'>
          <section className='w-[35rem] max-w-[40rem] space-y-12 rounded-xl border px-8 py-4'>
            <header>
              <h1 className='text-center text-[2rem] font-semibold'>
                ResetPassword
              </h1>
            </header>

            <form action='' className='space-y-4 text-[1.4rem]'>
              <div>
                <label htmlFor='newPassword'>New Password</label>
                <input
                  type='password'
                  id='newPassword'
                  className={styles.input}
                />
              </div>

              <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                  type='password'
                  id='confirmPassword'
                  className={styles.input}
                />
              </div>

              <button className={styles.btn}>Submit</button>
            </form>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default ResetPassword
