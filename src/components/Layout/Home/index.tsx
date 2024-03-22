function HomeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full  max-w-screen-4xl min-h-screen">
      {children}
    </div>
  )
}

export default HomeWrapper
