// messageModel.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required:true }, // if it's for one recipient
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

 const message =  mongoose.model('Message', messageSchema);
 module.exports = message