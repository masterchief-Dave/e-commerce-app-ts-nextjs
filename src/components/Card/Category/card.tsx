import { Card, CardTitle } from "@/components/ui/card"
import {
  SmartphoneIcon,
  WatchIcon,
  UnplugIcon,
  Gamepad2Icon,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"

const categories: {
  id: string
  name: string
  slug: string
  description: string | null
  icon: LucideIcon
}[] = [
  {
    id: "one",
    name: "Smartphones",
    slug: "smartphones",
    description: null,
    icon: SmartphoneIcon,
  },
  {
    id: "two",
    name: "Electronics",
    slug: "electronics",
    description: null,
    icon: UnplugIcon,
  },
  {
    id: "three",
    name: "Watch",
    slug: "watch",
    description: null,
    icon: WatchIcon,
  },
  {
    id: "four",
    name: "Accessories",
    slug: "accessories",
    description: null,
    icon: Gamepad2Icon,
  },
]
function CategoryCard() {
  return (
    <div
      className="grid grid-cols-4 animate-fade-up gap-12"
      style={{ animationDelay: "0.50s", animationFillMode: "both" }}
    >
      {categories.map((category) => (
        <Link href={`/category?name=${category.slug}`} key={category.id}>
          <Card className="relative flex size-full items-center h-52 w-full flex-col p-4 space-y-12 bg-white transition-colors hover:bg-muted/50">
            <CardTitle className="capitalize text-lg">
              {category.name}
            </CardTitle>
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
              <category.icon />
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default CategoryCard
