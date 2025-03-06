const express = require('express');
const app = express();
const cors = require("cors");
const { connectDB } = require('./config/db');
require('dotenv').config();
const userRoute = require("./route/userroute")


app.use(express.json());
 
app.use(cors());
connectDB();



// Create an HTTP server from the Express app
const http = require('http');
const server = http.createServer(app);


app.use('/user', userRoute )


// Set up Socket.IO on the HTTP server with CORS enabled
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
  
  }
});

// Socket.IO event handling
io.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`);

  // Listen for 'message' events from clients
  socket.on('message', (msg) => {
    console.log(`Message from ${socket.id}: ${msg}`);
    // Broadcast the message to all clients
    io.emit('message', `Message from ${socket.id}: ${msg}`);
  });

  // Handle client disconnect
  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

// Start the server on the port defined in your .env file
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

































