import React from "react";
import { useState, useEffect } from "react";
import { ChatInput } from "./components/ChatInput"; //named export
import ChatMessages from "./components/ChatMessages"; //Default export
import './App.css';


function App() {
  const [chatMessages, setChatMessages] = useState([]);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        setChatMessages(parsedMessages);
      } catch (error) {
        console.error('Error loading chat messages from localStorage:', error);
        // Fallback to default message if parsing fails
        setChatMessages([
          { 
            message: "Hello! I am a React chatbot. How can I help you today?", 
            sender: "robot", 
            id: crypto.randomUUID()
          }
        ]);
      }
    } else {
      // No saved messages, use default
      setChatMessages([
        { 
          message: "Hello! I am a React chatbot. How can I help you today?", 
          sender: "robot", 
          id: crypto.randomUUID()
        }
      ]);
    }
  }, []);

  // Save messages to localStorage whenever chatMessages changes
  useEffect(() => {
    if (chatMessages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
    }
  }, [chatMessages]);

  
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
// }

export default App;
