"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    });

    const data = await res.json();
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.reply },
    ]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full shadow-md transition"
      >
        {isOpen ? "Close" : "Ask Me"}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-80 bg-black border border-gray-700 rounded-lg shadow-xl text-white p-4 flex flex-col z-50">
          <div className="flex-1 max-h-64 overflow-y-auto space-y-2 text-sm mb-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap ${
                  msg.role === "user" ? "text-teal-400" : "text-gray-300"
                }`}
              >
                <strong>{msg.role === "user" ? "You" : "AI"}:</strong>{" "}
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-gray-500">Thinking...</div>}
          </div>

          <input
            className="p-2 bg-gray-800 border border-gray-600 rounded text-sm mb-2 outline-none"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button
            onClick={sendMessage}
            className="bg-teal-600 hover:bg-teal-700 px-3 py-1 rounded text-sm self-end"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}
