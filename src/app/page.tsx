"use client";
import { useChat } from "ai/react";
import MyMarkdown from "./components/my-markdown";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="container mt-12">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-3xl max-h-[600px] overflow-auto items-center">
          {messages.map((m) => (
            <div key={m.id}>
              <div className="font-semibold">
                {m.role === "user" ? "You: " : "AI: "}
              </div>
              <div className="p-2 rounded-md mb-2">
                <MyMarkdown text={m.content} />
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="fixed flex flex-row w-full max-w-md bottom-0 bg-gray-50 border border-gray-700 rounded mb-8 shadow-xl p-2"
        >
          <textarea
            cols={12}
            className="border border-gray-300 rounded p-2 w-full"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
          />
          <button type="submit" className="p-2 ml-4 bg-gray-300 rounded-md mt-4 align-middle">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
