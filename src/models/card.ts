import mongoose from 'mongoose'

export const CardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cardNumber: {
    type: String,
    required: true
  },
  cvc: {
    type: String,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  }
})


export const Card = mongoose.models.Card ? mongoose.models.Card : mongoose.model('Card', CardSchema)

