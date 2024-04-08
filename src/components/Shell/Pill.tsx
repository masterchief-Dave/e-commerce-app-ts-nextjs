import useProductStore from "@/lib/store/product.store"
import Link from "next/link"

type PillProps = {
  content: string
  link: string
}

export const Pill = ({ content, link }: PillProps) => {
  const { setParams } = useProductStore((state) => state)

  return (
    <Link
      onClick={() => {
        setParams({ name: link })
      }}
      href={`/search?name=${link}&rating=none&price=asc&page=1`}
      className="border inline-block border-black transition-all delay-75 w-fit rounded-full px-2 py-1 hover:bg-black hover:text-white"
    >
      <p className="font-medium w-full h-full text-sm text-center">{content}</p>
    </Link>
  )
}
