"use client";

import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import { useChatbot } from "@hooks/useChatbot";

export default function ChatLayout() {
  const { messages, handleSend } = useChatbot();

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
