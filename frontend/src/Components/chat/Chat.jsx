import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  // Create a ref to store the socket instance
  const socketRef = useRef();

  useEffect(() => {
    // Connect to the Socket.IO server (adjust the URL if needed)
    socketRef.current = io('http://localhost:8000');

    // Listen for messages from the server
    socketRef.current.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Cleanup the connection when component unmounts
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() !== '') {
      socketRef.current.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') sendMessage();
          }}
          style={{ width: '300px', padding: '8px' }}
        />
        <button onClick={sendMessage} style={{ padding: '8px 16px', marginLeft: '10px' }}>
          Send
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Messages</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {messages.map((msg, index) => (
            <li
              key={index}
              style={{
                marginBottom: '5px',
                padding: '8px',
                background: '#f1f1f1',
                borderRadius: '4px'
              }}
            >
              {msg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chat;
