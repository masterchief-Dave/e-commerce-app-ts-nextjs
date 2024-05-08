import { z } from "zod"

export const chatSchema = z.object({
  id: z.string(),
  isUserMessage: z.boolean(),
  text: z.string(),
})

// array validator
export const ChatrraySchema = z.array(chatSchema)
export type ChatInterface = z.infer<typeof chatSchema>
