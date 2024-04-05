import AvatarComp from "@/components/molecules/avatar"
import RatingComp from "@/components/molecules/ratingComp"
import getFormatDate from "@/lib/helpers/formatDate"
import { RenderRatingComp } from "@/lib/helpers/renderRating"
import type { ProductReviewResponseInterface } from "@/lib/types/review/review.type"

interface UsersReviewType {
  subject: string
  user: Omit<User, "token" | "success">["user"]
  rating: number
  review: string
  createdAt: Date
}

const UserReviewComp = ({
  createdAt,
  rating,
  review,
  subject,
  user,
}: UsersReviewType) => {
  return (
    <section className="grid grid-cols-[5rem_1fr] gap-8">
      <div>
        <AvatarComp src={user.avatar} alt={user?.name} fallback={user.name} />
      </div>
      <div>
        <div>
          <h4 className="font-medium"> {user.name}</h4>
          <div>
            <div className="">
              {/* <RatingComp rating={rating as number} onChange={() => { }} fixed={true} /> */}
              <RenderRatingComp rating={rating} color="#EEB012" />
            </div>
            <p className="text-[#cecece]">
              {getFormatDate(createdAt as unknown as string)}
            </p>
          </div>
        </div>
        <div className="max-w-4xl space-y-4">
          <h4 className="font-medium">{subject}</h4>
          <p>{review}</p>
        </div>
      </div>
    </section>
  )
}

export default UserReviewComp
