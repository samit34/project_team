// const express = require('express');

// const app = express();
// app.use (express.json());
// const {connectDB} = require('./config/db');
// require("dotenv").config();


// connectDB();

// app.get('/', (req, res) => {
//   res.send('Hello Wadncbhaesfkgedcyufbasorld');
// });    



// app.listen(process.env.PORT, () => {                 
//   console.log(`Server is running on port ${process.env.PORT}`);
// }); 









const express = require('express');
const app = express();
app.use(express.json());

const { connectDB } = require('./config/db');
require('dotenv').config();

connectDB();

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello Wadncbhaesfkgedcyufbasorld');
});

// Create an HTTP server from the Express app
const http = require('http');
const server = http.createServer(app);

// Set up Socket.IO on the HTTP server with CORS enabled
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    origin: "*", // Adjust for production
    methods: ["GET", "POST"]
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

































