import { apiService } from "@/lib/helpers/apiService"
import { ChatInterface } from "@/lib/schema/chat.schema"

class ChatService {
  static async chat(messages: ChatInterface) {
    return apiService(`/message`, "POST", {
      messages,
    })
  }
}

export default ChatService
