import express from 'express';
import http from 'http';
import {Server} from 'socket.io'
import path from 'path'

const __dirname = path.resolve();


const app=express()
const server= http.createServer(app)

const io= new Server(server)

app.use(express.static(path.join(__dirname,"public")))

io.on("connection",(socket)=>{
    console.log("user connected")
    socket.on("disconnected",()=>{
        console.log("user disconnected")
    })
    socket.on("offer",(offer)=>{
        socket.boardcast.emit("offer",offer)
    })
    socket.on("answer",(answer)=>{
        socket.boardcast.emit("answer",answer)
    });
    socket.on("ice-candidate",(candidate)=>{
        socket.boardcast.emit("answer",candidate)
    });
   
})

const PORT =3500;
server.listen(PORT ,()=>console.log(`server is running on ${PORT}`))