import fs from 'fs'
import mongoose from 'mongoose'

import { MONGODB_URI } from '@/utils/config'
import { Product } from '@/models/product'
// require('path')
const logger = require('./logger')

// mongoose.connect(process.env.MONGODB_URI).then(() => {
//   logger.info('Connected to the DB successfully 🎉')
// }).catch((err) => {
//   logger.error('Connection the DB failed 🚨')
// })
if (MONGODB_URI !== undefined) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      logger.info('connected to the DB successfully')
    })
    .catch((err: any) => {
      logger.err(err.message)
    })
}

const fileObj = JSON.parse(fs.readFileSync('../data/product.json').toString())
// const fileObj = JSON.parse(fs.readFileSync('../data/example.json'), 'utf-8')
// console.log(fileObj)

const fn = async () => {
  if (process.argv[2] === '--import') {
    await importData()
    process.exit()
  } else if (process.argv[2] === '--delete') {
    await deleteData()
    process.exit()
  } else {
    process.exit()
  }
}

const importData = async () => {
  try {
    // @ts-ignore
    await Product.create(fileObj)
    logger.info(`Product data imported successfully`)
  } catch (err) {
    logger.error(err)
  }
}

const deleteData = async () => {
  try {
    await Product.deleteMany()
    logger.info('Product data deleted successfully')
  } catch (err) {
    logger.error(err)
  }
}

fn()
