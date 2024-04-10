import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useFormik } from "formik"
import { AccountLayout } from "@/components/Layout/Account"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import useAuth from "@/lib/hooks/useAuth"
import {
  updatePasswordSchema,
  updatePasswordVal,
} from "@/lib/schema/auth.schema"
import { ErrorLabel } from "@/components/ui/errorLabel"
import UserService from "@/lib/services/user/user.service"
import Spinner from "@/components/molecules/spinner"
import { InputContainer } from "@/components/Form"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

type Props = Pick<User, "user">

const User = (props: Props) => {
  const [canEdit, setCanEdit] = useState<boolean>(false)
  const oldPasswordRef = useRef<HTMLInputElement | null>(null)
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [toggleCurrentPassword, setToggleCurrentPassword] = useState(false)
  const [toggleNewPassword, setToggleNewPassword] = useState(false)
  const { toast } = useToast()

  const styles = {
    label: `block  text-primary-grey-100 font-medium`,
    input: `p-4 w-full h-[40px] px-4 text-base border font-medium`,
    editBtn: `px-4 py-2 font-medium text-base text-white rounded-md`,
    icon: `${canEdit ? "block" : "hidden"} h-8 w-8 cursor-pointer`,
  }

  const handleCanEditToggle = () => {
    setCanEdit(!canEdit)
  }

  useEffect(() => {
    if (canEdit && oldPasswordRef.current) {
      oldPasswordRef?.current.focus()
    }
  }, [canEdit])

  const formik = useFormik({
    initialValues: updatePasswordVal,
    validationSchema: updatePasswordSchema,
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const response = await UserService.updatePassword(
          values.currentPassword,
          values.newPassword
        )
        if (response?.success) {
          toast({
            variant: "success",
            title: "Password Updated",
            description:
              "You can login in with your updated password next time",
          })
          setLoading(false)
          axios.defaults.headers.common["Authorization"] = response.user.token
          // SET THE HEADER COOKIE HERE FOR THE SERVER SIDE PROPS
          // setCookie('Authorization', response.user.token)
        } else {
          toast({
            variant: "destructive",
            title: "Password Not Updated",
            description: "Try again! with correct credentials",
          })
          formik.resetForm()
          setLoading(false)
        }
      } catch (err) {
        // toast.error('user info could not be updated')
        toast({
          variant: "destructive",
          title: "Error Updating Password",
          description:
            "An Error occured while processing your request, Please try again!.",
        })
        setLoading(false)
      }
      // console.log(response)
    },
  })

  return (
    <div>
      <AccountLayout>
        <div>
          <header className="flex items-center justify-between border-b p-4">
            <h1 className="text-xl font-semibold">Account Information</h1>

            <button
              className={`${styles.editBtn} ${
                canEdit ? "bg-primary-blue-300" : "bg-slate-500"
              }`}
              onClick={handleCanEditToggle}
            >
              Edit
            </button>
          </header>
          <form
            action=""
            className="space-y-4 p-8"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <label htmlFor="firstname" className={styles.label}>
                {" "}
                Firstname{" "}
              </label>
              <Input
                className={styles.input}
                value={user?.name.split(" ")[0]}
                disabled
              />
            </div>

            <div>
              <label htmlFor="lastname" className={styles.label}>
                Last name{" "}
              </label>
              <Input
                className={styles.input}
                placeholder=""
                disabled
                value={user?.name.split(" ")[1]}
              />
            </div>

            <div>
              <label htmlFor="emailAddress" className={styles.label}>
                {" "}
                Email Address{" "}
              </label>
              <Input
                className={styles.input}
                placeholder={props.user?.email}
                disabled
                value={user?.email}
              />
            </div>

            <div>
              <label htmlFor="oldPassword" className={styles.label}>
                {" "}
                Old Password
              </label>
              <InputContainer className="h-[40px]">
                <Input
                  type={canEdit && toggleCurrentPassword ? "text" : "password"}
                  className={`
                  ${styles.input} 
                  ${canEdit ? "" : ""}
                  border-0 outline-0 ring-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-offset-0 h-[37px]
                  `}
                  disabled={canEdit ? false : true}
                  placeholder="********"
                  ref={oldPasswordRef}
                  onChange={formik.handleChange}
                  name="currentPassword"
                  value={formik.values.currentPassword}
                />
                {toggleCurrentPassword ? (
                  <EyeOffIcon
                    className={styles.icon}
                    onClick={() =>
                      setToggleCurrentPassword(!toggleCurrentPassword)
                    }
                  />
                ) : (
                  <EyeIcon
                    className={styles.icon}
                    onClick={() =>
                      setToggleCurrentPassword(!toggleCurrentPassword)
                    }
                  />
                )}
              </InputContainer>

              {formik.errors.currentPassword &&
                formik.touched.currentPassword && (
                  <ErrorLabel text={formik.errors.currentPassword} />
                )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className={styles.label}>
                {" "}
                New Password{" "}
              </label>
              <InputContainer className="h-[40px]">
                <Input
                  type={canEdit && toggleNewPassword ? "text" : "password"}
                  className={`
                  ${styles.input} 
                  ${canEdit ? "" : ""}
                    border-0 outline-0 ring-0 focus:outline-0 focus:ring-0 focus:ring-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-offset-0 h-[37px]
                  `}
                  placeholder="********"
                  disabled={canEdit ? false : true}
                  name="newPassword"
                  onChange={formik.handleChange}
                  value={formik.values.newPassword}
                />
                {toggleNewPassword ? (
                  <EyeOffIcon
                    className={styles.icon}
                    onClick={() => setToggleNewPassword(!toggleNewPassword)}
                  />
                ) : (
                  <EyeIcon
                    className={styles.icon}
                    onClick={() => setToggleNewPassword(!toggleNewPassword)}
                  />
                )}
              </InputContainer>
              {formik.errors.newPassword && formik.touched.newPassword && (
                <ErrorLabel text={formik.errors.newPassword} />
              )}
            </div>
            <Button
              disabled={canEdit ? false : true}
              type="submit"
              className="h-fit w-full rounded-md bg-primary-blue-300 btn font-semibold text-white flex items-center justify-center"
            >
              {loading && <Spinner />}
              <span>Update Information</span>
            </Button>
          </form>
        </div>
      </AccountLayout>
    </div>
  )
}

export default User
