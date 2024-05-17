import express from 'express';
import categoriesRoutes from './routes/categories.js';
// const express = require('express') ;
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({mesg:"welcome to my application"})

})


app.use("/category",categoriesRoutes);



const PORT = 8080;
app.listen(PORT,()=>{console.log("server is running ",PORT)}
)

//cjs require
//esm import change packagejson (type:module)