import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    maxLength: [30, 'Your name cannot exceed 30 characters'],
  },
  googleId: String,
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    maxlength: 200,
    unique: true,
    validate: [validator.isEmail, 'Please enter valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minLength: [5, 'Password cannot be less than 5 characters'],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  passwordChangedAt: Date, // this property is created on the document object when the user changes their password
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  refreshToken: {
    type: String
  },
  deliveryAddress: [AddressSchema],
  creditCards: [CreditCardSchema]
})