import { apiService } from "@/helpers/apiService"

class ReviewService {
  static async createProductReview(
    url: string,
    { arg }: { arg: { id: string, subject: string, rating: number, review: string } }) {
    return apiService(`/review`, 'POST', {
      productId: arg.id,
      subject: arg.subject,
      rating: arg.rating,
      userReview: arg.review
    })
  }

  static async getProductReview(id: string) {
    return apiService(`/review/${id}`, 'GET')
  }
}

export default ReviewService

