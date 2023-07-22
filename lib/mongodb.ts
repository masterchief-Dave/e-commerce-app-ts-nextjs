import mongoose from 'mongoose'

const { MONGODB_URI } = process.env

if (!MONGODB_URI) {
  throw new Error('Invalid environment variable')
}

export const connectToMongoDB = async () => {
  mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to mongodb')
  }).catch((err) => {
    console.log('Error connecting to mongodb')
  })
}