// models/Message.js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
  senderId: {type:String, required: true},
  receiverId:{type: String,  required: true},
  timestamp: { type: Date, default: Date.now }
});

// const Message = mongoose.model('Message', messageSchema);

// module.exports = Message;
export default mongoose.model('Message', messageSchema);