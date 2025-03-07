import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize socket connection once
    socketRef.current = io("http://localhost:8000", {
      auth: { token, userId: id }
    });
    
    const socket = socketRef.current;
    
    // Listen for chat history when connection is established
    socket.on('chatHistory', (history) => {
      setMessages(history);
    });

    // Listen for new messages
    socket.on('receiveMessage', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });
    
    // Clean up on unmount
    return () => {
      socket.off('chatHistory');
      socket.off('receiveMessage');
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMsg = {
      receiver: id,
      text: inputMessage,
    };
    
    // Use the socket from ref to emit message
    socketRef.current.emit('sendMessage', newMsg);
    setInputMessage('');
  };
  
  

  return (
    <div>
      
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc' }}>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.sender}: </strong> {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Chat;
