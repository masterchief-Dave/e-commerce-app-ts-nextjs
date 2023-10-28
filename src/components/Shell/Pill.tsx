import Link from "next/link"

type PillProps = {
  content: string
  link: string
}

export const Pill = ({ content, link }: PillProps) => {
  return (
    <Link href={`/search/${link}`} className="border inline-block border-blue-600 transition-all delay-75 w-fit rounded-full px-8 py-1 hover:bg-blue-600 hover:text-white">
      <p className="font-medium w-full h-full text-[1.4rem] text-center">{content}</p>
    </Link>
  )
}