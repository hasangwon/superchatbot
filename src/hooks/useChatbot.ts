import { sendMessageToBot } from "@api/chatbot";
import { useChatbotStore } from "@stores/chatbotStore";
import { Message } from "@typesLocal/chatbot";

export const useChatbot = () => {
  const { messages, addMessage } = useChatbotStore();

  const handleSend = async (text: string) => {
    const userMsg: Message = { type: "user", text };
    addMessage(userMsg);

    const reply = await sendMessageToBot(text);
    const botMsg: Message = { type: "bot", text: reply };
    addMessage(botMsg);
  };

  return { messages, handleSend };
};
