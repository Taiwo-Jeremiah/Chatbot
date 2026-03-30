import React from "react";
import {useRef, useState, useEffect} from "react";
import './App.css';
import RobotProfileImage from "./assets/robot.png";  //default import, i.e an import without the curly bracket
import userProfileImage from "./assets/user.png";    //default import, i.e an import without the curly bracket
function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

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

    const response = Chatbot.getResponse(inputText);
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
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  );
}

function ChatMessage({ message, sender }) {
  /* const {message, sender} = props;
     const message = props.message;
   const sender = props.sender;
  */
  /* 
 if (sender === "robot") {
    return (
      <div>
        <img src="robot.png" width="32" />
        {message}
      </div>
    );
  } 
*/ 
  return (
    <>
      <div
        className={
          sender === "user" ? "chat-message-user" : "chat-message-robot"
        }
      >
        {/* the brackets of img below is just so that we can put it the code in multiple lines else we dont need the bracket */}
        {sender === "robot" && (
          <img src={RobotProfileImage} className="chat-message-profile" />
        )}
        <div className="chat-message-text">{message}</div>
        {sender === "user" && (
          <img src={userProfileImage} className="chat-message-profile" />
        )}
      </div>
    </>
  );
}

function ChatMessages({ chatMessages }) {
  const chatMesagesRef = useRef(null);

 useEffect(() => {
    const containerElem = chatMesagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className ="chat-messages-container" ref={chatMesagesRef}>
      {chatMessages.map((chatMessage) => { 
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: "hello chatbot", sender: "user", id: "id1" },
    { message: "Hello! How can I help you?", sender: "robot", id: "id2" },
    { message: "What is today's date?", sender: "user", id: "id3" },
    { message: "Today is January 23", sender: "robot", id: "id4" },
  ]);

  //Array destructuring
  //const [chatMessages, setChatMessages] = array;
  //const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
