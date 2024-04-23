import { useMutation } from "@tanstack/react-query"
import ChatService from "@/lib/services/chat/chat.service"
import { ChatInterface } from "@/lib/schema/chat.schema"

export const useChatMutations = () => {
  return useMutation({
    mutationFn: (message: ChatInterface) => {
      return ChatService.chat(message)
    },
    onSuccess: () => {
      console.log("success")
    },
  })
}
