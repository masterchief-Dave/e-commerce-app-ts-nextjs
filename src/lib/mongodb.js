import mongoose from 'mongoose'
import { MONGODB_URI } from '@/utils/config'

if (!MONGODB_URI) {
  throw new Error('Invalid environment variable')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export const connectToMongoDB = async () => {

  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose)
  }

  try {
    console.log('Connection to DB Started')
    cached.conn = await cached.promise

    // const { connection } = await mongoose.connect(MONGODB_URI)

    // if (connection.readyState === 1) {
    //   console.log('Connected to DB')
    //   return Promise.resolve(true)
    // }
  } catch (err) {
    // return Promise.reject(err)
    cached.promise = null
    throw err
  }

  return cached.conn
}