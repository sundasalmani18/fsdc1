import express from 'express'
import http from "http" 
import {Server} from "socket.io"
import  db from './model/index.js'
import mongoose from 'mongoose';
// import employeeRoutes from './routes/employeeRoutes.js'
import bodyParser from 'body-parser';
import cors from 'cors';
import portfolioRoutes from  "./routes/portfolioRoutes.js"
import supportRoutes from  "./routes/supportRoutes.js"
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';




const app = express()
const server =http.createServer(app)
 const io =new Server(server)




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"))
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for messages from the admin
  socket.on('adminMessage', (data) => {
    console.log(`Message from admin: ${data}`);
    // Broadcast the message to all clients (including the user)
    io.emit('userMessage', data);
  });

  // Listen for messages from the user
  socket.on('userMessage', (data) => {
    console.log(`Message from user: ${data}`);
    // Broadcast the message to the admin
    io.emit('adminMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
app.use(bodyParser.json());

 app.use(cors())



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





const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`"server running on port ${PORT}`)
})