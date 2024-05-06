import { MoveRightIcon } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

interface ContentInterface {
  title: string
  description: string
  btnText: string
  slug: string
}

function ContentSection({
  title,
  description,
  btnText,
  slug,
}: ContentInterface) {
  return (
    <section>
      <div className="p-4 border rounded-lg">
        <header className="flex items-end justify-between py-3 lg:items-center">
          <div className="flex flex-col items-center gap-2">
            <h2 className="w-full text-left font-bold uppercase text-primary-black-200 text-xl">
              {title}
            </h2>
            <p>{description}</p>
          </div>
          <Link href={slug}>
            <Button
              className="w-fit flex items-center justify-center gap-x-2"
              variant="default"
            >
              {btnText}
              <MoveRightIcon className="h-5 w-5" />
            </Button>
          </Link>
        </header>
      </div>
    </section>
  )
}

export default ContentSection
