export const apiFeatures = (
  minPrice: string,
  maxPrice: string,
  minStock: string,
  maxStock: string,
  minReview: string,
  maxReview: string,
  minRating: string,
  maxRating: string
) => {

  const priceQuery: any = {}
  const stockQuery: any = {}
  const reviewQuery: any = {}
  const ratingQuery: any = {}

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

  return {
    priceQuery,
    stockQuery,
    reviewQuery,
    ratingQuery
  }
}