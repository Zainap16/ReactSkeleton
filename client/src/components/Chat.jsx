import { useState } from "react";

function Chat() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  async function sendPrompt() {
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
        }),
      });

      const data = await res.json();

      setResponse(data.response);
    } catch (err) {
      console.error(err);
      setResponse("Something went wrong.");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Chat</h1>

      <textarea
        rows="5"
        cols="60"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask me anything..."
      />

      <br />
      <br />

      <button onClick={sendPrompt}>Send</button>

      <hr />

      <h2>AI Response</h2>

      <p>{response}</p>
    </div>
  );
}

export default Chat;