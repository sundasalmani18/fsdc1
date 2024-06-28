import express from 'express';
import cors from 'cors';
import categoriesRoutes from './routes/categoriesRoutes.js';
import employeeRoutes from './routes/employeeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import testimonailRoutes from './routes/testimonailRoutes.js'
import orderRoutes from './routes/orderRoutes.js';
import booktableRoutes from './routes/booktableRoutes.js';
import itemsRoutes from './routes/itemsRoutes.js';
import menuCategoryRoutes from './routes/categoryMenuRoutes.js';
import authRoutes from './routes/authRoutes.js';
import loginRoutes from './routes/loginRoutes.js'

// const express = require('express') ;
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ mesg: "welcome to my application" })

})

app.use("/login", loginRoutes);
app.use("/auth", authRoutes);
app.use("/category", categoriesRoutes);
app.use("/employee", employeeRoutes);
app.use("/user", userRoutes);
app.use("/testimonial", testimonailRoutes);
app.use("/order", orderRoutes);
app.use("/booktable", booktableRoutes);
app.use("/item", itemsRoutes);
app.use("/menucategory", menuCategoryRoutes);



const PORT = 8080;
app.listen(PORT, () => { console.log("server is running ", PORT) }
)

//cjs require
//esm import change packagejson (type:module)