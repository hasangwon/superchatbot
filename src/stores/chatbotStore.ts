import { Message } from "@typesLocal/chatbot";
import { create } from "zustand";

interface ChatbotState {
  messages: Message[];
  addMessage: (msg: Message) => void;
}

export const useChatbotStore = create<ChatbotState>((set) => ({
  messages: [{ type: "bot", text: "안녕하세요! 무엇을 도와드릴까요?" }],
  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),
}));
