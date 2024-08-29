import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

// const express = require('express') ;
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mesg: "welcome to my application" });
});

app.use("/auth", authRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("server is running ", PORT);
});

//cjs require
//esm import change packagejson (type:module)
