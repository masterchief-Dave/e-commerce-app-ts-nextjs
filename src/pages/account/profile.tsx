import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import * as Yup from 'yup'
import toast from 'react-hot-toast'

import { AccountLayout } from '@/components/Layout/Account'
import { getUpdatePassword } from '@/utils/updatePassword'
import { fetchDataFromExpressServer } from '@/utils/fetchOrder'
import { getToken } from 'next-auth/jwt'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import useAuth from "@/lib/hooks/useAuth"
import { useRouter } from "next/router"

type Props = Pick<User, "user">

const User = (props: Props) => {
  const [firstName, lastName] = useState('')
  const [canEdit, setCanEdit] = useState<boolean>(false)
  const oldPasswordRef = useRef<HTMLInputElement | null>(null)

  console.log(props)

  const styles = {
    label: `block text-[1.6rem] text-primary-grey-100 font-medium`,
    input: `p-4 w-full h-[4rem] px-4 text-xl lg:text-[1.6rem] border font-medium`,
    editBtn: `px-8 py-2 lg:text-[1.6rem] font-medium text-xl text-white rounded-md`,
  }

  const handleCanEditToggle = () => {
    setCanEdit(!canEdit)
  }

  useEffect(() => {
    if (canEdit && oldPasswordRef.current) {
      oldPasswordRef?.current.focus()
    }

  }, [canEdit])


  const formik = useFormik<UpdatePasswordProps>({
    initialValues: {
      password: '',
      newPassword: ''
    },
    validationSchema: Yup.object({
      password: Yup.string().required().min(5),
      newPassword: Yup.string().required().min(5)
    }),
    onSubmit: async (values) => {
      // update the password from here
      const data = {
        password: values.password,
        newPassword: values.newPassword
      }

      try {
        const response = await getUpdatePassword({ data })
        if (response.status === 200) {
          toast.success('Password updated')
        }
      } catch (err) {
        toast.error('user info could not be updated')
      }
      // console.log(response)
    }
  })

  return (
    <div>
      <AccountLayout>
        <div>
          <header className='flex items-center justify-between border-b p-8'>
            <h1 className='text-xl font-bold lg:text-2xl'>
              Account Information
            </h1>

            <button className={`${styles.editBtn} ${canEdit ? 'bg-primary-blue-300' : 'bg-slate-500'}`} onClick={handleCanEditToggle}>Edit</button>
          </header>
          <form action='' className='space-y-4 p-8' onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor='firstname' className={styles.label}>
                {' '}
                Firstname{' '}
              </label>
              <Input className={styles.input} placeholder={firstName} disabled />
            </div>

            <div>
              <label htmlFor='lastname' className={styles.label}>
                Last name{' '}
              </label>
              <Input className={styles.input} placeholder="" disabled />
            </div>

            <div>
              <label htmlFor='emailAddress' className={styles.label}>
                {' '}
                Email Address{' '}
              </label>
              <Input className={styles.input} placeholder={props.user?.email} disabled />
            </div>

            <div>
              <label htmlFor='oldPassword' className={styles.label}>
                {' '}
                Old Password
              </label>
              <Input
                type='password'
                className={`${styles.input} ${canEdit ? 'border ring-offset-2 focus:ring-2 focus:outline-none focus:ring-offset-2 ring-offset-white' : ''}`}
                disabled={canEdit ? false : true}
                placeholder='********'
                ref={oldPasswordRef}
                onChange={formik.handleChange}
                name='password'
                value={formik.values.password}
              />
              {formik.errors.password && <span>{formik.errors.password}</span>}
            </div>

            <div>
              <label htmlFor='confirmPassword' className={styles.label}>
                {' '}
                New Password{' '}
              </label>
              <Input
                type='password'
                className={`${styles.input} ${canEdit ? 'border ring-offset-2 focus:ring-2 focus:outline-none focus:ring-offset-2 ring-offset-white' : ''}`}
                placeholder='********'
                disabled={canEdit ? false : true}
                name='newPassword'
                onChange={formik.handleChange}
                value={formik.values.newPassword}
              />
              {formik.errors.newPassword && <span>{formik.errors.newPassword}</span>}
            </div>
            <Button className='h-fit w-full rounded-md bg-primary-blue-300 py-4 text-[1.6rem] font-semibold text-white '>
              Update Information
            </Button>
          </form>
        </div>
      </AccountLayout>
      {/* <Footer /> */}
    </div>
  )
}

export default User

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const session = await getSession({ req: context.req })

  let data

  if (!session) {
    return {
      props: {
        user: null
      }
    }
  }
  //note: i cannot use localhost here because server side props does not run on the browser but on the server side, what i have to do is move this code to util and call it from there
  try {
    const response = await axios.get(`https://sage-warehouse-backend.onrender.com/api/v1/user/profile/${session._id}`)
    data = await response.data

    const token = await getToken({
      req: context.req,
      secret: process.env.JWT_SECRET,
    })

    // console.log({ token })

    const expressApiOrders = await fetchDataFromExpressServer(context.req, token!.accessToken as string)


  } catch (err) {
    // console.log(err)
  }

  /**
   *  can I check from here if the item is already in the cart already from here, useCart will not work here because this side is server side rendered
   * i want to persist the cart in the local storage so from there i guess i can check if an item is already in the cart 
   * */

  return {
    props: {
      user: data.user
    }
  }
}