import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

// const express = require('express') ;
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ mesg: "welcome to my application" })

})

app.use("/auth", authRoutes);



const PORT = 8000;
app.listen(PORT, () => { console.log("server is running ", PORT) }
)

//cjs require
//esm import change packagejson (type:module)