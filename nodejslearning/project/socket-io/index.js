
import express from "express"
import http from "http" 
import {Server} from "socket.io"


const app =express()
const server =http.createServer(app)
const io =new Server(server)
 app.use("/css",express.static("./node_modules/bootstrap/dist/css"));
 app.use(express.static("public"))
 io.on("connection",(socket)=>{
    console.log("user connected")
    socket.on("chat-message",(msg)=>{
        io.emit("chat-message",msg)
        console.log("chat-message",msg)
    });
    socket.on("disconnect",(msg)=>{
        console.log("user disconnected")
    });
 })


// const app = express()
// const server= http.createServer(app)
// const io = new Server(server)
// app.use("/css",express.static("./node_modules/bootstrap/dist/css"));
// app.use(express.static("public"))
// io.on("connection", (socket) => {
//     console.log("user connected")
//     socket.on("chat-message",(msg)=>{
//         io.emit("chat-message",msg)
//         console.log("message",msg)
//     });
//     socket.on("disconnect",(msg)=>{

//         console.log("user disconnected")
//     });


//  });



// app.use(express.static(path.resolve("./public")))

// app.get("/",(req,res)=>{
// res.sendFile("/public/index.html")
// })



const PORT = 5000
server.listen(PORT, ()=> 
(console.log(`server is runnng on port ${PORT} `)))