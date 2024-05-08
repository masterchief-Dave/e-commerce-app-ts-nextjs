function ChatHeader() {
  return (
    <div className="w-full flex gap-3 justify-start items-center text-zinc-800">
      <div className="flex flex-col items-start text-sm">
        {/* <p className="text-xs">Chat with</p> */}
        <div className="flex gap-1.5 items-center">
          <div className="relative flex h-3 w-3">
            <span className="w-2 h-2 absolute rounded-full bg-green-500 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </div>
          <p className="font-medium">Chat-Bot</p>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
