import { Footer } from "@/components/Footer"

function HomeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full h-full  max-w-screen-4xl">
      <div className="h-full">{children}</div>
      <Footer />
    </div>
  )
}

export default HomeWrapper
