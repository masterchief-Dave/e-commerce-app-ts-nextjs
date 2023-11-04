import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

import { AccountLayout } from '@/components/Layout/Account'
// import { data } from '@/globals/header'

type Props = Pick<User, "user">

interface FormData { }

const user = (props: Props) => {
  const [firstName, lastName] = props.user.name.split(' ')
  const [canEdit, setCanEdit] = useState<boolean>(false)
  const oldPasswordRef = useRef<HTMLInputElement | null>(null)

  const styles = {
    label: `block text-[1.6rem] text-primary-grey-100 font-medium`,
    input: `p-4 w-full px-4 text-xl lg:text-[1.6rem] border font-medium`,
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


  // const formik = useFormik({}) 
  // fetch the user from the backend

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
          <form action='' className='space-y-4 p-8'>
            <div>
              <label htmlFor='firstname' className={styles.label}>
                {' '}
                Firstname{' '}
              </label>
              <input className={styles.input} placeholder={firstName} disabled />
            </div>

            <div>
              <label htmlFor='lastname' className={styles.label}>
                Last name{' '}
              </label>
              <input className={styles.input} placeholder={lastName} disabled />
            </div>

            <div>
              <label htmlFor='emailAddress' className={styles.label}>
                {' '}
                Email Address{' '}
              </label>
              <input className={styles.input} placeholder={props.user?.email} disabled />
            </div>

            <div>
              <label htmlFor='oldPassword' className={styles.label}>
                {' '}
                Old Password
              </label>
              <input className={`${styles.input} ${canEdit ? 'border ring-offset-2 focus:ring-2 focus:outline-none focus:ring-offset-2 ring-offset-white' : ''}`} disabled={canEdit ? false: true } placeholder='********'  ref={oldPasswordRef} />
            </div>

            <div>
              <label htmlFor='confirmPassword' className={styles.label}>
                {' '}
                Confirm Password{' '}
              </label>
              <input className={`${styles.input} ${canEdit ? 'border ring-offset-2 focus:ring-2 focus:outline-none focus:ring-offset-2 ring-offset-white' : ''}`} placeholder='********' disabled={canEdit ? false : true} />
            </div>
            <button className='h-fit w-full rounded-md bg-primary-blue-300 py-4 text-[1.6rem] font-semibold text-white '>
              Save changes
            </button>
          </form>
        </div>
      </AccountLayout>
      {/* <Footer /> */}
    </div>
  )
}

export default user

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

  // before a user can access this page check if the user has been authenticated or is authorized if there is no user session available then this page should not show to the user, and the user should be redirected back to the '/login' page 

  // move this code into next api route
  // const response = await axios.get(`https://sage-warehouse-backend.onrender.com/api/v1/products/${id}`)
  const session = await getSession({ req: context.req })
  let data

  if (!session) {
    return {
      props: {
        user: null
      }
    }
  }
  //note: i cannot use localhost here because server side props does not run on the browser but on the server side
  try {
    const response = await axios.get(`https://sage-warehouse-backend.onrender.com/api/v1/user/profile/${session._id}`)
    data = await response.data

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