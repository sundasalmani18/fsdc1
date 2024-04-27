const express = require('express');
const nodemailer = require("nodemailer");
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const router= express.Router();



router.get('/', (req, res) => {
  console.log("Email sent")
const transporter = nodemailer.createTransport({
    service :"gmail",
  host: "smtp.gmail.com",
  port: 5000,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

const mailoption ={
from: {
    name:"sundas almani",
    address:process.env.USER
}, // sender address
to: "hamzakhan6334@gmail.com", // list of receivers
subject: "send email using nodemailer node js  ", // Subject line
text: "Hello EverOne", // plain text body
html: "<b>Hello world?</b>", // html body

attachments:[{
file :'firstCv.pdf',
path :path.join(__dirname , 'firstCv.pdf'),
contentType:'application/pdf'    
},
{
  file:'pizza.jpg',
  path:path.join(__dirname ,'pizza.jpg'),
  contentType:'image/jpg'  
  },
]
}

const sendMail = async(transporter,mailoption)=>{
  try{
    await transporter.sendMail(mailoption)
    console.log("Email Has Been Send Successfully")
  }
  catch(error){
    console.error(error)
  }
}

sendMail(transporter,mailoption)
})
module.exports=router