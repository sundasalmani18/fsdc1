import express from "express"
import http from "http";
import userRoutes from './Routes/userRoutes.js' 

const app =express()
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ mesg: "welcome to my application" })

})



app.use("/user",userRoutes)


const PORT = 8080;
app.listen(PORT, () => { console.log("server is running ", PORT) }
)
