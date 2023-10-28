import React from "react"

const Loader: React.FC = () => {
  return (
    <div className="w-screen h-screen min-h-screen min-w-full">
      <div className="flex justify-center items-center h-screen">
        <div className="relative inline-flex">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}


export default Loader