import * as Yup from 'yup'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import axios from 'axios'

import { Layout } from '@/components/Layout'
import { PasswordResetSuccess } from '@/components/Modal/EmailResetSuccess'

type Props = {}

interface FormValues {
  password: string
  passwordConfirm: string
}

const ResetPassword = (props: Props) => {
  const styles = {
    label: `text-[1.6rem] font-normal block mb-2`,
    input: `h-[3.5rem] w-full outline-0 px-4 border text-[1.6rem] focus:ring-1 rounded-md`,
    btn: `h-[3.5rem] w-full bg-primary-blue-100 text-white font-medium text-[1.6rem] rounded-md`,
  }
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()
  const queryString = router.asPath.split('/')[3]

  const handleSubmit = async ({ password, passwordConfirm }: FormValues) => {
    try {
      const response = await axios.post(`http://localhost:3002/api/auth/reset-password/${queryString}`, {
        password,
        passwordConfirm
      })
      if (response.status === 200) {
        // open modal saying password changed successfully and that the page can be closed
      }
    } catch (err) {
      console.log(err)
    }
  }

  const formik = useFormik<FormValues>({
    initialValues: {
      password: '',
      passwordConfirm: ''
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required('Password is required').min(6, 'Mininum of 6 characters'),
      passwordConfirm: Yup.string().required('').min(6).oneOf([Yup.ref('password')], 'Passwords do not match')
    }),
    onSubmit: (formValues) => {
      handleSubmit(formValues)
    }
  })

  return (
    <Layout>
      <>
        <div className='py-16 '>
          <div className='flex items-center justify-center'>
            <section className='w-[35rem] max-w-[40rem] space-y-12 rounded-xl border px-8 py-4'>
              <header>
                <h1 className='text-center text-[2rem] font-semibold'>
                  ResetPassword
                </h1>
              </header>

              <form
                action=''
                className='space-y-4 text-[1.6rem]'
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label htmlFor='newPassword'>New Password</label>
                  <input
                    type='password'
                    id='newPassword'
                    name='password'
                    className={styles.input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.errors.password && <p className='text-[1.2rem] text-red-500'>{formik.errors.password}</p>}
                </div>

                <div>
                  <label htmlFor='confirmPassword'>Confirm Password</label>
                  <input
                    type='password'
                    id='confirmPassword'
                    name='passwordConfirm'
                    className={styles.input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordConfirm}
                  />
                  {formik.errors.passwordConfirm && <p className='text-[1.3rem] text-red-500'>{formik.errors.passwordConfirm}</p>}
                </div>
                <button type='submit' className={styles.btn}>Submit</button>
              </form>
            </section>
          </div>
        </div>
        <PasswordResetSuccess isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    </Layout>
  )
}

export default ResetPassword
