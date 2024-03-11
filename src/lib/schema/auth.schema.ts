import * as yup from 'yup'
import { LoginInterface } from "../types/auth-type"

export const loginVal: yup.InferType<typeof loginSchema> = {
  email: "",
  password: ""
}

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is Required"),
  password: yup.string().required("Password is Required")
})

export const registerVal: yup.InferType<typeof registerSchema> = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
}

export const registerSchema = yup.object().shape({
  name: yup.string().max(100, "Must be less than 100 Characters").required('User name is Required'),
  email: yup.string().email().required('Must be a valid email'),
  password: yup.string().min(5, "Must be more than 5 Characters").required('Password is Required'),
  confirmPassword: yup.string().required('Confirm your password').oneOf([yup.ref('password')], 'Passwords must be the same')
})

export const titleOptions: { label: string, value: string }[] = [
  { label: 'Mr', value: 'mr' },
  { label: 'Mrs', value: 'mrs' },
  // { label: '', value: '' },
  // { label: '', value: '' }
] 