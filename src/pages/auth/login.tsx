import * as Yup from 'yup'
import Link from 'next/link'
import Image from 'next/image'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import { useAppDispatch } from '@/hooks/reduxhooks'
import { loginFailure, loginStart, loginSuccess } from '@/features/login/loginSlice'
import { fetchLogin } from '@/utils/fetchLogin'
import { loginUser } from '@/helpers'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import AuthLayout from '@/components/Layout/Auth'

type Props = {
  myCookieValue: string,
  data: string
}

interface FormData {
  email: string
  password: string
}

const Login = ({ myCookieValue, data }: Props) => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const formik = useFormik<FormData>({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Must be a valid email'),
      password: Yup.string().required()
    }),
    onSubmit: (values, formikHelpers) => {
      // console.log(values)
      handleSubmit(values)
    }
  })

  const styles = {
    label: `text-[1.4rem] font-normal block mb-2`,
    input: `h-[3.5rem] w-full outline-0 px-4 border text-[1.4rem] mb-2 focus:ring-1 rounded-md`,
    btn: `h-[3.5rem] w-full bg-primary-blue-500 hover:bg-primary-blue-300 font-medium text-[1.4rem] rounded-md`,
  }

  const handleSubmit = async ({ email, password }: FormData) => {
    try {
      dispatch(loginStart())
      // https://sage-warehouse-backend.onrender.com/

      // ## new code next-auth login

      const loginResponse = await loginUser({ email, password })
      console.log({ loginResponse })

      if (loginResponse && !loginResponse.ok) {
        console.log(loginResponse.error)
      } else {
        const pathname = router.asPath !== '/auth/login' ? router.asPath : '/'
        router.push(pathname)
      }


      /*
      // backend express server auth
      const response = await axios.post('http://localhost:8100/api/v1/auth/login', {
        email,
        password
      })

      // store the user token in the localstorage for now in development mode, it will be removed later and replaced with cookies in production
      localStorage.setItem('sage-warehouse', JSON.stringify({ token: response.data.token }))

      console.log(response.data)
      */

    } catch (err: any) {
      console.log(err)
      dispatch(loginFailure(err.message))
    }
  }

  const handleGoogleAuth = async () => {
    const pathname = router.asPath !== '/auth/login' ? router.asPath : '/'

    await signIn('google', {
      callbackUrl: pathname
    })
  }

  return (
    <AuthLayout>
      <section className='h-fit w-full grid grid-cols-12'>
        <div className='col-start-2 col-end-12 rounded-xl border py-4 px-6 space-y-4'>
          <form className='space-y-4' onSubmit={formik.handleSubmit}>
            <header className='mb-8'>
              <h1 className='text-left text-[2rem] font-semibold'>Sign in</h1>
              <p className='text-[1.4rem] text-primary-grey-100 font-normal'>Choose your preferred sign in method</p>
            </header>
            <div>
              <label htmlFor='email' className={styles.label}>
                Email Address
              </label>
              <Input
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
              {/* add fingerprint icon, makes it look really cool */}
              <Input
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

            <Button
              className={`${styles.btn} text-white`}
              type='submit'
            >
              Submit
            </Button>

            <div className='mb-8 text-[1.3rem] flex justify-between'>
              <div>
                <p className=''>
                  Dont have an account{' '}
                  <span>
                    <Link
                      href='/auth/register'
                      className='text-primary-yellow-200 font-medium'
                    >
                      Sign up
                    </Link>
                  </span>{' '}
                </p>
              </div>

              <Link
                href='/auth/forgot-password'
                className='font-medium text-primary-yellow-200'
              >
                Reset password
              </Link>
            </div>



            <div className='flex justify-center'>
              <span className='inline-block h-[1px] '></span>
              <p className='font-bold'>OR</p>
            </div>
          </form>

          <div className='space-y-4 col-start-2 col-end-12'>
            <Button
              className={`${styles.btn} flex items-center justify-center gap-x-4 border bg-white text-primary-blue-100 hover:text-white`}
              type='submit'
              onClick={(e) => {
                e.preventDefault()
                // router.push('http://localhost:8100/api/v1/auth/google')
                handleGoogleAuth()
              }
              }
            >
              <p>Sign In with Google</p>
              <Image
                src='/assets/icons/google.svg'
                alt='Google'
                className='h-[13px] w-[13px]'
                width={1000}
                height={1000}
              />
            </Button>
          </div>
        </div>
      </section>
    </AuthLayout >
  )
}

// export async function getServerSideProps({ req }: any) {
//   const response = await fetchLogin()
//   console.log(response)
//   const myCookieValue = req.cookies.e_commerce_token || 'No cookie found'
//   return {
//     props: {
//       myCookieValue,
//       // data
//     },
//   }
// }

export default Login
