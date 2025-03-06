const express = require('express');
const app = express();
const cors = require("cors");
const { connectDB } = require('./config/db');
require('dotenv').config();
const userRoute = require("./route/userroute");
const Message = require('./model/messageschema');
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors());
connectDB();

// Create HTTP server
const http = require('http');
const server = http.createServer(app);

app.use('/user', userRoute);

// Setup Socket.IO
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins (Change it as needed)
    methods: ["GET", "POST"]
  }
});

// Middleware to authenticate socket connections
io.use((socket, next) => {
  let token = socket.handshake.auth?.token; // Handle missing token
  if (!token) {
    return next(new Error("Authentication error: No token provided"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next(new Error("Authentication error: Invalid token"));
    socket.user = decoded;
    next();
  });
});

// Store connected users
const users = {};

io.on('connection', (socket) => {
  console.log('New client connected');

  const senderId = socket.user.username; // Sender's username
  const userId = socket.handshake.auth.userId; // Receiver's ID
  console.log("Receiver ID:", userId);

  if (senderId) {
    users[senderId] = socket.id; // Map receiver's ID to socket ID
  }

  console.log("Active users:", users);

  // Fetch chat history
  Message.find({ 
    $or: [
      { sender: senderId, receiver: userId }, 
      { sender: userId, receiver: senderId } // ✅ Fetch both sender and receiver messages
    ] 
  })
    .sort({ createdAt: 1 })
    .then(messages => {
      socket.emit('chatHistory', messages);
    })
    .catch(err => console.error("Error fetching chat history:", err));

  // Listen for messages
  socket.on('sendMessage', async (msgData) => {
    const newMessage = new Message({
      sender: senderId,
      receiver: msgData.receiver,
      text: msgData.text
    });

    try {
      await newMessage.save();
      const receiverSocketId = users[msgData.receiver];
      
      // Get receiver socket ID
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("receiveMessage", newMessage);
      }

      io.to(socket.id).emit("receiveMessage", newMessage);
      
    } catch (err){
      console.error('Error saving message:', err);
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
    delete users[senderId]; // Remove disconnected user
  });
});

// Start server
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
