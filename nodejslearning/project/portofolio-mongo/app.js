import express from 'express'
import http from "http"
import { Server } from "socket.io"
import db from './model/index.js'
import mongoose from 'mongoose';
// import employeeRoutes from './routes/employeeRoutes.js'
import bodyParser from 'body-parser';
import cors from 'cors';
import portfolioRoutes from "./routes/portfolioRoutes.js"
import supportRoutes from "./routes/supportRoutes.js"
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';
import messageRoutes from './routes/messageRoutes.js'
import Message from './model/messge.model.js'
import authRoutes from './routes/authRoutes.js'




const app = express()
app.use(bodyParser.json());

app.use(cors())
const server = http.createServer(app)
// const io = new Server(server)
// Socket.IO server setup with CORS configuration
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // React app URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  },
});




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"))


// Track the admin's socket connection status
let adminSocket = null;
io.on('connection', (socket) => {
  console.log('A user connected');



  // Set the admin socket
  socket.on('setAdmin', () => {
    adminSocket = socket;
    console.log('Admin is online');
  });

  // Handle disconnect event
  socket.on('disconnect', () => {
    if (adminSocket && socket.id === adminSocket.id) {
      adminSocket = null;
      console.log('Admin has disconnected');
    }
    console.log('A user disconnected:', socket.id);
  });

  // Handle video call request
  socket.on('videoCallRequest', (data) => {
    const { userId } = data;

    if (adminSocket) {
      // Notify the admin about the video call request
      adminSocket.emit('videoCallRequest', { userId, message: 'User wants to start a video call' });
      socket.emit('adminOnline', 'Admin is online, waiting for response.');
    } else {
      socket.emit('adminOffline', 'Admin is offline, please try again later.');
    }
  });

  // Handle video call offer/answer
  socket.on('videoCallOffer', (offerData) => {
    const { offer, adminId, userId } = offerData;
    socket.to(userId).emit('videoCallOffer', { offer, adminId });
  });

  socket.on('videoCallAnswer', (answerData) => {
    const { answer, userId, adminId } = answerData;
    socket.to(adminId).emit('videoCallAnswer', { answer, userId });
  });

  // ICE Candidate Handling
  socket.on('iceCandidate', (candidateData) => {
    const { candidate, targetId } = candidateData;
    socket.to(targetId).emit('iceCandidate', { candidate });
  });



  socket.on('adminMessage', async (data) => {
    const { senderId, receiverId, message } = data;
    // Store the message in MongoDB
    const newMessage = new Message({
      user: 'Admin',
      message: message,
      senderId,
      receiverId,
    });
    
    try {
      await newMessage.save();
      console.log('Admin message saved to DB:', message);
    } catch (error) {
      console.error('Error saving admin message:', error);
    }

    // Emit the message to the user
    socket.emit('adminMessage', message);
  });

  // Receive user message and store it in MongoDB
  socket.on('userMessage', async (data) => {
    const { senderId, receiverId, message } = data;
    // Store the message in MongoDB
    const newMessage = new Message({
      user: 'User',
      message: message,
      senderId,
      receiverId,
    });

    try {
      await newMessage.save();
      console.log('User message saved to DB:', message);
    } catch (error) {
      console.error('Error saving user message:', error);
    }



    
    // Emit the message to the admin
    socket.emit('userMessage', message);
  });





//without database
  // // Listen for messages from the admin
  // socket.on('adminMessage', (data) => {
  //   console.log(`Message from admin: ${data}`);
  //   // Broadcast the message to all clients (including the user)
  //   io.emit('userMessage', data);
  // });

  // // Listen for messages from the user
  // socket.on('userMessage', (data) => {
  //   console.log(`Message from user: ${data}`);
  //   // Broadcast the message to the admin
  //   io.emit('adminMessage', data);
  // });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});




dotenv.config();
db.mongose.connect(db.url).then(() => {
  console.log("connected to database")

  //   const mainData = new PortfolioModel(exampleData);
  //   return mainData.save();
  //  })
  // .then(() => {
  //   console.log('Data saved successfully');
  //   mongoose.connection.close(); // Close the connection when done
})
  .catch((err) => {
    console.error('Error:', err);
  });




app.get('/', (req, res) => {
  res.json({ 'message': "mongo db app" })
})


app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});
app.get('/user', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'user.html'));
});

app.use("/portfolio", portfolioRoutes);
app.use("/supportsystem", supportRoutes);
app.use("/message", messageRoutes);
app.use("/auth", authRoutes);





const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`"server running on port ${PORT}`)
})