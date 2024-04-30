const express = require('express');
const path = require('path');
const multer =require('multer');

const router = express.Router();
const upload = multer({dest:"/uploads"})

router.get("/",(req,res)=>{
    return res.render("uploadview")
});




router.post("/upload", upload.single('profileImage'),(req,res)=>{
    console.log(req.body)
    console.log(req.file);
    return res.redirect("/")
});

module.exports=router