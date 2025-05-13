import { useState } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { sendMessage } from "../api";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (msg) => {
    const userMessage = { role: "user", text: msg };
    setMessages((prev) => [...prev, userMessage]);

    const answer = await sendMessage(msg);
    const botMessage = { role: "bot", text: answer || "I don't know." };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="chat-window">
      <div className="chat-history">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} role={msg.role} text={msg.text} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}
