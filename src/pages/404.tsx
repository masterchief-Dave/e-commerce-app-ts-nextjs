import Link from "next/link"

function Page() {
  return (
    <main>
      <div className="flex items-center justify-center h-screen gap-x-2">
        Page not found go back{" "}
        <Link href="/">
          <span className="w-fit underline underline-offset-4 text-blue-500">
            Home
          </span>
        </Link>
      </div>
    </main>
  )
}

export default Page
