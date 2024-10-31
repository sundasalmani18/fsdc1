// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';
import 'dotenv/config.js'
// import dotenv from 'dotenv'
// dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
   host: "smtp.gmail.com", // Your email provider's SMTP server
   port: 8080,
   secure: false, // Use true for 465, false for other ports
   auth: {
       user: process.env.RECEIVER_EMAIL, // Your email
       pass:process.env.APP_PASSWORD  // Your email password
   }
});

export default transporter;
