import * as yup from "yup"
import { LoginInterface } from "../types/auth-type"

const defaultMessage = "Field is required"
function customMessage(custom: boolean, field?: string, message?: string) {
  if (custom) return message
  return `${field} is required`
}

export const loginVal: yup.InferType<typeof loginSchema> = {
  email: "",
  password: "",
}

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is Required"),
  password: yup.string().required("Password is Required"),
})

export const registerVal: yup.InferType<typeof registerSchema> = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .max(100, "Must be less than 100 Characters")
    .required("User name is Required"),
  email: yup.string().email().required("Must be a valid email"),
  password: yup
    .string()
    .min(5, "Must be more than 5 Characters")
    .required("Password is Required"),
  confirmPassword: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Passwords must be the same"),
})

export const titleOptions: { label: string; value: string }[] = [
  { label: "Mr", value: "mr" },
  { label: "Mrs", value: "mrs" },
  // { label: '', value: '' },
  // { label: '', value: '' }
]

export const billingAddressVal: yup.InferType<typeof billingAddressSchema> = {
  firstname: "",
  lastname: "",
  phoneNumber: "",
  address: "",
  country: "",
  zipCode: "",
  default: false,
}

export const billingAddressSchema = yup.object().shape({
  firstname: yup.string().required("Field is required"),
  lastname: yup.string().required(defaultMessage),
  phoneNumber: yup.string().required(defaultMessage),
  address: yup.string().required(defaultMessage),
  country: yup.string().required(defaultMessage),
  zipCode: yup.string().required(defaultMessage),
  default: yup.boolean().default(false).required(),
})

export const updatePasswordVal: yup.InferType<typeof updatePasswordSchema> = {
  currentPassword: "",
  newPassword: "",
}

export const updatePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required("Field is required").min(5),
  newPassword: yup.string().required(defaultMessage).min(5),
})
