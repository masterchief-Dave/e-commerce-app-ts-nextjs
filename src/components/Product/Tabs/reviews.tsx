import AuthenticatedModal from "@/components/Modal/AuthenticatedModal"
import RatingComp from "@/components/molecules/ratingComp"
import Spinner from "@/components/molecules/spinner"
import UserReviewComp from "@/components/organisms/userReviews"
import { ReviewSkeleton } from "@/components/skeleton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import {
  useCreateProductReview,
  useGetProuctReview
} from "@/lib/hooks/review/review.hook"
import useAuth from "@/lib/hooks/useAuth"
import { useGetUserOrders } from "@/lib/hooks/user/user.hook"
import {
  reviewSchema,
  reviewVal
} from "@/lib/schema/review.schema"
import usePageTracker from "@/lib/store/tracker.store"
import { errorLogger } from "@/lib/utils/logger"
import { useFormik } from "formik"
import { useRouter } from "next/router"
import { useState } from "react"

type Props = {
  productId: string
  hasPurchasedProduct: number
}

export const Reviews = (props: Props) => {
  const [showReview, setShowReview] = useState(false)
  const [authModal, setAuthModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [rating, setRating] = useState(0)
  const { isAuthenticated } = useAuth()
  const { setPage } = usePageTracker()
  const router = useRouter()
  const { toast } = useToast()
  const { trigger, isMutating } = useCreateProductReview()
  const { data, isLoading: isReviewsLoading } = useGetProuctReview(props.productId)
  const orderQuery = useGetUserOrders()
  const hasUserPurchasedThisItem = orderQuery.data?.map((order) => order.orderItems)
    .flat()
    .findIndex((product) => product?.product?._id === props.productId)
  const [hasPurchasedProduct, setHasPurchasedProduct] = useState(hasUserPurchasedThisItem)
  const formik = useFormik({
    initialValues: reviewVal,
    validationSchema: reviewSchema,
    onSubmit: () => {
      handleAddReview()
    }
  })
  const handleReview = () => {
    if (isAuthenticated) {
      return setShowReview(true)
    }
    // redirect to login page or show auth modal
    setPage(router.asPath)
    setAuthModal(true)
  }
  const handleAddReview = async () => {
    try {
      setIsLoading(true)
      const response = await trigger({
        id: props.productId,
        rating: formik.values.rating,
        review: formik.values.review,
        subject: formik.values.subject
      })
      if (response?.message === 'success') {
        setIsLoading(false)
        toast({
          variant: 'success',
          title: "Review Created",
          description: "You have created a review!."
        })
      }
    } catch (err) {
      errorLogger({ url: '', message: '', err: err as unknown as Error })
      setIsLoading(false)
      toast({
        variant: 'destructive',
        title: "Review not Created",
        description: "Review was not created. Try again!"
      })
    }
  }
  // Catch Rating value
  const handleRating = (rate: number) => {
    formik.setFieldValue('rating', rate)
    setRating(rate)
  }

  console.log({ hasPurchasedProduct })

  // console.log(orderQuery.data)

  return (
    <section className="text-[1.6rem]">
      <h1 className="font-bold text-3xl mb-12">Reviews</h1>

      <div className="space-y-12">
        <div>
          {isReviewsLoading ? (
            <>
              <ReviewSkeleton />
            </>
          ) : (
            data && data?.data.reviews.length >= 1 ? (
              data?.data.reviews.map((review) => {
                return (
                  <UserReviewComp
                    key={review._id}
                    createdAt={review.createdAt}
                    rating={review.rating}
                    review={review.review}
                    subject={review.subject}
                    user={review.user}
                  />
                )
              })
            ) : (
              <p className="text-slate-600">No comment(s) yet on this product.</p>
            )
          )}
        </div>
        {hasUserPurchasedThisItem === -1 ? (
          <p className="text-slate-500">Buy this product before you can leave a review.</p>
        ) : (
          <section>
            <h3 className="font-medium mb-4"> Review this product </h3>

            {/* if the customer has purhcased this product then they can leave a review */}
            <div className="space-y-8">
              <Button
                className="w-fit h-[4rem] rounded-md outline-0 border-0"
                disabled={showReview || isReviewsLoading}
                onClick={handleReview}>
                Write a customer review
              </Button>

              {showReview && (
                <div className="space-y-8">
                  <h4 className="font-medium underline underline-offset-2">Leave your Review</h4>
                  <div className="flex items-center gap-x-4">
                    <h5>Your Rating: </h5>
                    <RatingComp rating={rating} onChange={handleRating} />
                  </div>
                  <form action="" className="w-2/5 space-y-8" onSubmit={formik.handleSubmit}>
                    <div>
                      <label htmlFor="subject">Subject</label>
                      <Input className="h-[4rem]" placeholder="Subject" id="subject" onChange={formik.handleChange} name="subject" />
                    </div>
                    <div>
                      <label htmlFor="review">Review</label>
                      <Textarea placeholder="Not less than 20 characters" id="review" className="h-[4rem] text-[1.6rem] border" name="review" onChange={formik.handleChange} />
                    </div>
                    <div className="flex items-center gap-x-8">
                      <Button
                        className="px-8 border text-white btn-red w-fit"
                        onClick={() => setShowReview(false)}
                        disabled={isLoading || isMutating}
                        type="button"
                      >
                        Close
                      </Button>
                      <Button
                        className="px-8 flex items-center btn justify-center gap-x-4 w-fit"
                        disabled={isLoading || isMutating}
                        type="submit"
                      >
                        {isLoading && <Spinner className="h-10 w-10 text-white" />}
                        <span>
                          Save
                        </span>
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </section>
        )}

      </div>
      {authModal && <AuthenticatedModal openModal={authModal} setOpenModal={setAuthModal} />}
    </section>
  )
}

/**
 * Fantastic
 * 
 * This product lived up to my expectations, I am not disappointed. Overall quality and durable product. 
 */