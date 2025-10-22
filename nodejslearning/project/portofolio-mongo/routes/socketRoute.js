// socketRoutes.js
import { Server } from "socket.io";
import Message from '../model/messge.model.js'

// This will be the function that sets up your socket events
const setupSocketEvents = (server) => {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000', // React app URL
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle chat room creation (as mentioned previously)
    socket.on('joinRoom', (data) => {
      const { userId, adminId } = data;
      const roomName = `chatroom-${userId}-${adminId}`;
      socket.join(roomName);
      console.log(`${socket.id} joined room ${roomName}`);

       socket.to(adminId).emit('userJoinedRoom', { userId, roomName });
    });



    socket.on('userMessage', async (data) => {
      console.log('Received userMessage data:', data);  // Log full data object
  
      // ✅ Correct destructuring (Extract messageData first)
      const { messageData, roomName } = data;
      if (!messageData) {
        console.error('Missing messageData in received data:', data);
        return;
      }
  
      // ✅ Extract values from messageData
      const { senderId, receiverId, message } = messageData;
  
      // ✅ Check for missing fields
      if (!senderId || !receiverId || !message) {
        console.error('Missing required fields in messageData:', messageData);
        return;
      }
  
      console.log('Data is valid. Proceeding with saving the message...');
  
      // ✅ Save message in database
      const newMessage = new Message({
        user: 'User',
        message: message,
        senderId,
        receiverId,
        timestamp: new Date().toISOString(),
      });
  
      try {
        await newMessage.save();
        console.log('User message saved to DB:', message);
  
        // ✅ Broadcast to admin
        socket.to(roomName).emit('userMessage', messageData);
      } catch (error) {
        console.error('Error saving user message:', error.message);
        if (error.errors) {
          for (let field in error.errors) {
            console.error(`Validation error on field ${field}:`, error.errors[field].message);
          }
        }
      }
  });
  


  

  socket.on('adminMessage', async (data) => {
    console.log('Received message data:', data);  // Log the data to ensure it has the expected fields
  
    if (!data.messageData) {
      console.error('Missing messageData in received data');
      return;
    }
  
    const { userId, adminId, message } = data.messageData;
  
    if (!userId || !adminId || !message) {
      console.error('Missing required fields in messageData');
      return;
    }
  
    // Use the provided room name from data instead of reconstructing it
    const roomName = data.roomName || `chatroom-${userId}-${adminId}`;
  
    // Save the message in the database
    const newMessage = new Message({
      user: 'Admin',
      message: message,
      senderId: adminId,
      receiverId: userId,
      timestamp: new Date().toISOString(),
    });
  
    try {
      await newMessage.save();
      console.log('Admin message saved:', newMessage);
  
      // Broadcast the message to the admin in the same room
      socket.to(roomName).emit('adminMessage', data.messageData);
    } catch (error) {
      console.error('Error saving admin message:', error);
    }
  });
  

  // 📌 WebRTC Signaling Events 📌
  socket.on("offer", (data) => {
    console.log("Received WebRTC Offer from:", data.sender);
    socket.to(data.target).emit("offer", data);
  });

  socket.on("answer", (data) => {
    console.log("Received WebRTC Answer from:", data.sender);
    socket.to(data.target).emit("answer", data);
  });

  socket.on("ice-candidate", (data) => {
    console.log("Received ICE Candidate:", data);
    socket.to(data.target).emit("ice-candidate", data);
  });


  

    // Handle user disconnect
    socket.on('disconnect', () => {
      console.log('A user disconnected:', socket.id);
    });
  });
};

export default setupSocketEvents;
