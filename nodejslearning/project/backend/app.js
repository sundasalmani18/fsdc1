import express from 'express';
import cors from 'cors';
import categoriesRoutes from './routes/categoriesRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import testimonailRoutes from './routes/orderRoutes.js'
import orderRoutes from './routes/orderRoutes.js';

// const express = require('express') ;
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ mesg: "welcome to my application" })

})


app.use("/category", categoriesRoutes);
app.use("/employee", employeeRoutes);
app.use("/user", userRoutes);
app.use("/testimonial", testimonailRoutes);
app.use("/order", orderRoutes);



const PORT = 8080;
app.listen(PORT, () => { console.log("server is running ", PORT) }
)

//cjs require
//esm import change packagejson (type:module)