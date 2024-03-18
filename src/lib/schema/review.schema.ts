import * as yup from 'yup'

const defaultMessage = 'Field is required'
export const reviewSchema = yup.object().shape({
  rating: yup.number().required(defaultMessage),
  review: yup.string().min(20).required(defaultMessage),
  subject: yup.string().min(2).required(defaultMessage)
})

export const reviewVal: yup.InferType<typeof reviewSchema> = {
  rating: 0,
  review: '',
  subject: ''
}