import { useState } from "react";
import { getBotReply } from "./botLogic";
// import { Chatbot } from "supersimpledev";
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
  // useState(""); returns an array with two elements, the first element is the current state value (inputText) and the second element is a function that allows us to update that state (setInputText). We can use array destructuring to assign these values to variables. So, inputText will hold the current value of the input field, and setInputText will be used to update that value whenever the user types something in the input field.
  const [inputText, setInputText] = useState("");

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  function saveInputText(event) {
  setInputText(event.target.value);
}

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);

    // const response = Chatbot.getResponse(inputText);
    // REPLACE WITH THIS:
const response = getBotReply(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a messgae to chatbot"
        size="30"
        value={inputText}
        onChange={saveInputText}
        onKeyDown={handleKeyPress}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}