export const apiFeatures = (
  minPrice: string,
  maxPrice: string,
  minStock: string,
  maxStock: string,
  minReview: string,
  maxReview: string,
  minRating: string,
  maxRating: string,
  productname: string,
  categoryname: string
) => {

  const priceQuery: any = {}
  const stockQuery: any = {}
  const reviewQuery: any = {}
  const ratingQuery: any = {}
  let searchQuery: any = {}
  let categoryQuery: any = {}

  if (minPrice) {
    priceQuery.$gte = parseFloat(minPrice as string)
  }

  if (maxPrice) {
    priceQuery.$lte = parseFloat(maxPrice as string)
  }

  if (minStock) {
    stockQuery.$gte = parseInt(minStock as string)
  }

  if (maxStock) {
    stockQuery.$lte = parseInt(maxStock as string)
  }

  if (minReview) {
    reviewQuery.$gte = parseInt(minReview as string)
  }

  if (maxReview) {
    reviewQuery.$lte = parseInt(maxReview as string)
  }

  if (minRating) {
    ratingQuery.$gte = parseFloat(minRating as string)
  }

  if (maxRating) {
    ratingQuery.$lte = parseFloat(maxRating as string)
  }

  if(productname) {
  // const products = await Product.find({ name: { $regex: productname, $options: 'i' } })
  // this is the query { price: { '$gte': 2000 }, ratings: { '$gte': 4 } }

    searchQuery = {$regex: productname, $options: 'i'}
  }

  if(categoryname) {
    categoryQuery = {$regex: categoryname, $options: 'i'}
  }

  return {
    priceQuery,
    stockQuery,
    reviewQuery,
    ratingQuery,
    searchQuery,
    categoryQuery
  }
}