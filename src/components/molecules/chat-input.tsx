import { cn } from "@/lib/utils"
import { HTMLAttributes, useState } from "react"
import { Input } from "../ui/input"
import { nanoid } from "nanoid"
import { useChatMutations } from "@/lib/hooks/chat/chat.hook"
import { ChatInterface } from "@/lib/schema/chat.schema"
interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

function ChatInput({ className, ...props }: ChatInputProps) {
  const [input, setInput] = useState("")

  const { mutate: sendMessage, isPending } = useChatMutations()

  return (
    <div {...props} className={cn("border-t border-zinc-200", className)}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none">
        <Input
          type="text"
          placeholder="Write a message"
          onChange={(e) => {
            setInput(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault()

              const message: ChatInterface = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              }

              sendMessage(message)
            }
          }}
          className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}

export default ChatInput
