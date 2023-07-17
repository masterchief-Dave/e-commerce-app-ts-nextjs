import * as Yup from 'yup'
import Link from 'next/link'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { Layout } from '@/components/Layout'
import { AuthNavbar } from '@/components/Navbar/authNavbar'
import { useAppDispatch } from '@/hooks/reduxhooks'
import { loginFailure, loginStart, loginSuccess } from '@/features/login/loginSlice'

type Props = {}

interface FormData {
  email: string
  password: string
}

const Login = (props: Props) => {
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
    input: `h-[3.5rem] w-full outline-0 px-4 border text-[1.4rem] focus:ring-1 rounded-md`,
    btn: `h-[3.5rem] w-full bg-primary-blue-500 hover:bg-primary-blue-300  font-medium text-[1.4rem] rounded-md`,
  }

  const handleSubmit = async ({ email, password }: FormData) => {

    try {
      dispatch(loginStart())

      // https://sage-warehouse-backend.onrender.com/

      // const response = await fetch('http://localhost:8100/api/v1/auth/login', {
      //   method: 'POST',
      //   body: JSON.stringify({ email, password }),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })

      const response = await fetch('https://sage-warehouse-backend.onrender.com/api/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        const user: User = await response.json()
        Cookies.set('authLoginToken', user?.token!, { expires: 1, secure: true })
        // Save user data to local storage
        const userData = {
          name: user.user.name,
          email: user.user.email,
          photo: user.user.avatar.url,
          id: user.user._id
        }
        localStorage.setItem('user', JSON.stringify(userData))
        dispatch(loginSuccess({
          success: user.success,
          token: user.token,
          id: user.user._id,
          email: user.user.email,
          photo: user.user.avatar.url,
          name: user.user.name
          // user: user.user
        }))
        router.push('/')
      } else {
        const error = response.statusText
        dispatch(loginFailure(error))
      }
    } catch (err: any) {
      console.log(err)
      dispatch(loginFailure(err.message))
    }
  }

  const handleGoogleAuth = async () => {
    //  router.push('http://localhost:8100/api/v1/auth/google')
    const response = await fetch('http://localhost:8100/api/v1/auth/google', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      method: 'GET',
      mode: 'no-cors'
    }).then((data) => {
      console.log(data?.body!)
    })
    // const user = await response.json()
    // console.log({ user })
  }


  return (
    <Layout>
      <div className='font-poppins'>
        <AuthNavbar />
        <section className='flex h-full w-full items-center justify-center py-16'>
          <div className='rounded-xl border py-4 px-6 space-y-8'>

            <form className='w-[35rem] max-w-[40rem] space-y-4' onSubmit={formik.handleSubmit}>
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

            <button
              className={`${styles.btn} text-white`}
              type='submit'
            >
              Submit
            </button>

            <div className='mb-8 flex justify-end'>
              <Link
                href='/auth/forgot-password'
                className='text-[1.2srem] text-primary-yellow-200'
              >
                Forgot password
              </Link>
            </div>

            <div>
              <p className='text-[1.3rem]'>
                Dont have an account{' '}
                <span>
                  <Link
                    href='/auth/register'
                    className='text-primary-yellow-200'
                  >
                    Register here
                  </Link>
                </span>{' '}
              </p>
            </div>

            <div className='flex justify-center'>
              <span className='inline-block h-[1px] '></span>
              <p className='font-bold'>OR</p>
            </div>


            </form>

            <div className='space-y-4'>
              <button
                className={`${styles.btn} flex items-center justify-center gap-x-4 border bg-white text-primary-blue-100`}
                type='submit'
                onClick={(e) => {
                  e.preventDefault()
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
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Login
