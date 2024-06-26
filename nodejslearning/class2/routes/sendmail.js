const express = require('express');
const nodemailer = require("nodemailer");
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

// let uploadPathFolderURL = path.join(__dirname, 'fileupload' + '/')

router.get('/', (req, res) => {
  console.log("Email sent")

  let cvFile = path.dirname(__filename, 'firstCv.pdf')
  let imgFIle = path.dirname(__filename, 'pizza.jpg')

  console.log('cvFile', cvFile)
  console.log('imgFIle', imgFIle)

  const transporterGmail = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 5000,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
  });


  
  const mailoption = {
    from: {
      name: "sundas almani",
      address: process.env.USER
    }, // sender address
    to: "hamzakhan6334@gmail.com", // list of receivers
    subject: "send email using nodemailer node js  ", // Subject line
    text: "Hello EverOne", // plain text body
    html: "<b>Hello world?</b>", // html body


    attachments: [{
      // file: 'firstCv.pdf',
      // path: path.join(__dirname, 'firstCv.pdf'),
      // contentType: 'application/pdf'
      filename: 'firstCv.pdf',
      content: cvFile
    },
    {
      filename: 'pizza.jpg',
      content: imgFIle
    },
    ]
  }

  const sendMail = async (transporterGmail, mailoption) => {
    try {
      await transporterGmail.sendMail(mailoption)
      console.log("Email Has Been Send Successfully")
    }
    catch (error) {
      console.error(error)
    }
  }

  sendMail(transporterGmail, mailoption)

  res.write('Email Has Been Send Successfully');
  res.end();
})
module.exports = router