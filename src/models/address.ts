import mongoose from 'mongoose'

export const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
  },
  zipCode: {
    type: String
  },
  country: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

export const Address = mongoose.models.Address ? mongoose.models.Address : mongoose.model('Address', AddressSchema)


