import Link from 'next/link'
import { useState } from 'react'
import { Layout } from '@/components/Layout'
import { AuthNavbar } from '@/components/Navbar/authNavbar'
import { useFormik } from 'formik'
import * as Yup from 'yup'

type Props = {}

interface FormData {
  fullName: string
  password: string
  email: string
  confirmPassword: string
}

const Register = (props: Props) => {

  const formik = useFormik<FormData>({
    initialValues: {
      fullName: "",
      password: "",
      email: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().max(100, "Must be less than 100 Characters").required('Required'),
      password: Yup.string().min(5, "Must be more than 5 Characters").required('Required'),
      email: Yup.string().email().required('Must be a valid email'),
      confirmPassword: Yup.string().required('Confirm your password').oneOf([Yup.ref('password')], 'Passwords must be the same')
    }),
    onSubmit(values, formikHelpers) {
      console.log(values)
    },
  })

  const styles = {
    label: `text-[1.4rem] font-normal block mb-2`,
    input: `h-[3.5rem] w-full outline-0 px-4 border text-[1.4rem] focus:ring-1 rounded-md`,
    btn: `h-[3.5rem] w-full bg-primary-blue-500 hover:bg-primary-blue-300 text-white font-medium text-[1.4rem] rounded-md`,
  }

  console.log(formik.touched)

  return (
    <Layout>
      <div className='font-poppins'>
        <AuthNavbar />
        <section className='flex h-full w-full items-center justify-center py-16'>
          <form
            action=''
            className='w-[35rem] max-w-[40rem] space-y-4 rounded-xl border py-4 px-6'
            onSubmit={formik.handleSubmit}
          >
            <header>
              <h1 className='text-center text-[2rem] font-normal'>Register</h1>
            </header>

            <div>
              <label htmlFor='fullName' className={styles.label}>
                Full Name
              </label>
              <input
                type='text'
                placeholder='Firstname Lastname'
                id='fullName'
                name='fullName'
                className={styles.input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName ? <p className='text-red-500'>{formik.errors.fullName}</p> : null}
            </div>

            <div>
              <label htmlFor='email' className={styles.label}>
                Email Address
              </label>
              <input
                type='text'
                placeholder='Email Address'
                id='email'
                name='email'
                className={styles.input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? <p className='text-red-500'>{formik.errors.email}</p> : null}

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
                className={styles.input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? <p className='text-red-500'>{formik.errors.password}</p> : null}
            </div>

            <div>
              <label htmlFor='confirmPassword' className={styles.label}>
                Confirm Password
              </label>
              <input
                type='password'
                placeholder='Confirm Password'
                id='confirmPassword'
                name='confirmPassword'
                className={styles.input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className='text-red-500'>{formik.errors.confirmPassword}</p> : null}
            </div>

            <button className={styles.btn}>Submit</button>

            <div>
              <p>
                By clicking signup you agree to Sage-warehouse{' '}
                <span className='text-text-primary-link'>
                  <Link href='/legal/terms-and-condition'>
                    terms and condition
                  </Link>
                </span>
              </p>
            </div>

            <div className='text-[1.3rem]'>
              <p>
                Already have an account{' '}
                <span>
                  <Link href='/auth/login' className='text-primary-yellow-200'>
                    Login here
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}

export default Register
