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


  const transporterMaintrap = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "86761e5e0864de",
      pass: "f921cbdc789295"
    }
  });

  const mailoption = {
    from: {
      name: "sundas almani",
      address: process.env.USER
    }, // sender address
    to: "zignunokku@gufum.com", // list of receivers
    subject: "send email using nodemailer node js  ", // Subject line
    text: "Hello EveryOne", // plain text body
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

  const sendMail = async (transporterMaintrap, mailoption) => {
    try {
      await transporterMaintrap.sendMail(mailoption)
      console.log("Email Has Been Send Successfully")
    }
    catch (error) {
      console.error(error)
    }
  }
  sendMail(transporterMaintrap, mailoption)
  res.write('Email Has Been Send Successfully');
  res.end();
})
module.exports = router