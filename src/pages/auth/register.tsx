'use client'
import * as Yup from 'yup'
import Link from 'next/link'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { registerStart, registerSuccess, registerFailure } from '@/features/register/registerSlice'
// import { loginSuccess } from '@/features/login/loginSlice'
import { BASE_URL } from '@/utils/config'
import { loginUser } from '@/helpers'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import AuthLayout from '@/components/Layout/Auth'
import toast from 'react-hot-toast'


type Props = {}

interface FormData {
  name: string
  password: string
  email: string
  confirmPassword: string
}

const Register = (props: Props) => {
  const dispatch = useDispatch()
  const router = useRouter()

  // const [loading, setLoading] = useState(false)

  const formik = useFormik<FormData>({
    initialValues: {
      name: "",
      password: "",
      email: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(100, "Must be less than 100 Characters").required('Required'),
      password: Yup.string().min(5, "Must be more than 5 Characters").required('Required'),
      email: Yup.string().email().required('Must be a valid email'),
      confirmPassword: Yup.string().required('Confirm your password').oneOf([Yup.ref('password')], 'Passwords must be the same')
    }),
    onSubmit(values, formikHelpers) {
      handleSubmit(values)
    },
  })

  const styles = {
    label: `text-[1.6rem] font-normal block mb-2`,
    input: `h-[5.6rem] w-full outline-0 px-4 border text-[1.6rem] mb-2 focus:ring-1 rounded-md`,
    btn: `h-[5.6rem] w-full bg-primary-blue-500 hover:bg-primary-blue-300 text-white font-medium text-[1.6rem] rounded-md`,
  }

  const handleSubmit = async ({ name, email, password, confirmPassword }: FormData) => {
    try {
      dispatch(registerStart())

      const response = await axios.post('https://sage-warehouse-backend.onrender.com/api/v1/auth/register', { name, email, password, confirmPassword })

      if (response.data.success) {
        // save user in session
        const loginResponse = await loginUser({ email, password })

        if (loginResponse && !loginResponse.ok) {
          console.log(loginResponse.error)

          toast.error('Error with Login')
          throw new Error(loginResponse?.error!)
        } else {
          router.push('/')
          toast.success('Register Successful')
        }
      }

    } catch (err: any) {
      // console.log(err)
      toast.error('An Error Occured')
      dispatch(registerFailure(err.message))
    }
  }

  return (
    <AuthLayout>
      <section className='h-fit w-full grid grid-cols-12'>
        <form
          action=''
          className='col-start-2 col-end-12 space-y-4 rounded-xl border py-4 px-6'
          onSubmit={formik.handleSubmit}
        >
          <header className='mb-8'>
            <h1 className='text-left text-[2rem] font-semibold'>Sign up</h1>
            <p className='text-[1.6rem] text-primary-grey-100 font-normal'>Choose your preferred sign in method</p>
          </header>

          <div>
            <label htmlFor='fullName' className={styles.label}>
              Full Name
            </label>
            <Input
              type='text'
              placeholder='Firstname Lastname'
              id='fullName'
              name='name'
              className={styles.input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? <p className='text-red-500'>{formik.errors.name}</p> : null}
          </div>

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

          <div>
            <label htmlFor='confirmPassword' className={styles.label}>
              Confirm Password
            </label>
            <Input
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

          <Button type='submit' className={styles.btn}>Submit</Button>

          {/* <div>
              <p>
                By clicking signup you agree to Sage-warehouse{' '}
                <span className='text-text-primary-link'>
                  <Link href='/legal/terms-and-condition'>
                    terms and condition
                  </Link>
                </span>
              </p>
            </div> */}

          <div className='text-[1.6rem]'>
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
    </AuthLayout>
  )
}

export default Register
