const express = require('express');
const path = require('path');
const multer =require('multer');

const router = express.Router();
// const upload = multer({dest:"/uploads"})


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null,Date.now() + '-' + file.originalname); // Rename the file to include the timestamp
    },
  });
  const upload = multer({ storage: storage });

router.get("/",(req,res)=>{
    return res.render("uploadview")
});




router.post("/upload", upload.single('profileImage'),(req,res)=>{
    console.log(req.body)
    console.log(req.file);
    return res.redirect("/")
});

module.exports=router