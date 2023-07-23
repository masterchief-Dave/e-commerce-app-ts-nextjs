import mongoose from 'mongoose'

export const AddressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true
  },
  zip: {
    type: String
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
})

export const Address = mongoose.models.Address ? mongoose.models.Address : mongoose.model('Address', AddressSchema)


