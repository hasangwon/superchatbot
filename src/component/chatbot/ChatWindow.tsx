"use client";

import { Message } from "@typesLocal/chatbot";

const ChatWindow = ({ messages }: { messages: Message[] }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={msg.type === "user" ? "text-right" : "text-left"}
        >
          <span className="inline-block bg-white p-2 m-1 rounded shadow">
            {msg.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
