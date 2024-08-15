import express from "express"
import http from "http"
import path from "path"
import { Server } from "socket.io";


const app =express()
const server= http.createServer(app)
const io = new Server(server)
io.on("connection", socket => {
    console.log("user has been connected" ,socket.id)
 });

app.use(express.static(path.resolve("./public")))

app.get("/",(req,res)=>{
res.sendFile("/public/index.html")
})



const PORT = 5000
server.listen(PORT, ()=> 
(console.log(`server is runnng on port ${PORT} `)))