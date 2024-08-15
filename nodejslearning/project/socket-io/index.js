// const express =require("express") 
// const http=require("http")
// const socketIo= require("socket.io")
import express from "express"
import http from "http" 
import path from "path"
import {Server} from "socket.io"



const app = express()
const server= http.createServer(app)
const io = new Server(server)

app.use(express.static("public"))
io.on("connection", (socket) => {
    console.log("user connected")
    socket.on("chat-message",(msg)=>{
        io.emit("chat-message",msg)
        console.log(msg)
    });
    socket.on("disconnect",(msg)=>{

        console.log("user disconnected")
    });


 });



// app.use(express.static(path.resolve("./public")))

// app.get("/",(req,res)=>{
// res.sendFile("/public/index.html")
// })



const PORT = 5000
server.listen(PORT, ()=> 
(console.log(`server is runnng on port ${PORT} `)))