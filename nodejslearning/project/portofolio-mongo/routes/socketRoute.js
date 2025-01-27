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
    socket.on('startChat', (data) => {
      const { userId, adminId } = data;
      const roomName = `chatroom-${userId}-${adminId}`;
      socket.join(roomName);
      console.log(`${socket.id} joined room ${roomName}`);

      socket.to(adminId).emit('userJoinedRoom', { userId, roomName });
    });



// Handle incoming messages from the user
socket.on('userMessage', async (data) => {
    console.log('Received userMessage data:', data);  // Log all incoming data
  
    const { senderId, receiverId, message } = data;
  
    // Check if any required fields are missing
    if (!senderId || !receiverId || !message) {
      console.error('Missing required fields in message data:', data);
      return;  // Return early if required fields are missing
    }
  
    console.log('Data is valid. Proceeding with saving the message...');
  
    // Generate room name from userId and adminId
    const roomName = `chatroom-${senderId}-${receiverId}`;
  
    // Save the message in the database (MongoDB)
    const newMessage = new Message({
      user: 'User',
      message,
      senderId,
      receiverId,
      timestamp: new Date().toISOString(),
    });
  
    try {
      // Save the message to the database
      await newMessage.save();
      console.log('User message saved to DB:', message);
  
      // Broadcast the message to the admin in the same room
      socket.to(roomName).emit('userMessage', data);
    } catch (error) {
      console.error('Error saving user message:', error.message);  // Log only the error message
      if (error.errors) {
        for (let field in error.errors) {
          console.error(`Validation error on field ${field}:`, error.errors[field].message);
        }
      }
    }
  });
  
  socket.on('adminMessage', async (data) => {
    console.log('Received message data:', data);  // Log the data to ensure it has the expected fields
  
    const { userId, adminId, message } = data;
  
    if (!userId || !adminId || !message) {
      console.error('Missing required fields in message data');
      return;
    }
  
    // Generate room name from userId and adminId
    const roomName = `chatroom-${userId}-${adminId}`;
  
    // Save the message in the database
    const newMessage = new Message({
      user: 'Admin',
      message,
      senderId: adminId,
      receiverId: userId,
      timestamp: new Date().toISOString(),
    });
  
    try {
      await newMessage.save();
      console.log('Admin message saved:', newMessage);
       // Broadcast the message to the admin in the same room
       socket.to(roomName).emit('adminMessage', data);
    } catch (error) {
      console.error('Error saving admin message:', error);
    }
  });
  

    // Handle user disconnect
    socket.on('disconnect', () => {
      console.log('A user disconnected:', socket.id);
    });
  });
};

export default setupSocketEvents;
