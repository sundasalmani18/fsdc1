import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
// const express = require('express') ;
const app = express();
app.use(cors());
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));
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
