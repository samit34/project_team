import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
   const {id} = useParams()
   const token = localStorage.getItem("token");
   console.log("token" , token)
const socket = io("http://localhost:8000" , {
  auth: {
    token: token,
    userId: id
  }
});


  useEffect(() => {
    // Listen for chat history when connection is established
    socket.on('chatHistory', (history) => {
      setMessages(history);
    });

    // Listen for new messages
    socket.on('receiveMessage', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      socket.off('chatHistory');
      socket.off('receiveMessage');
    };
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
   

    const newMsg = {
       receiver: id,
      text: inputMessage,
    };
    socket.emit('sendMessage', newMsg);

    console.log(newMsg)
    setInputMessage('');
  };

  return (
    <div>
      <h1>Chat App</h1>
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
