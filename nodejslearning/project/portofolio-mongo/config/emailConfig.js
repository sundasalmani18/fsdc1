// const nodemailer = require('nodemailer');
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
   host: "smtp.gmail.com", // Your email provider's SMTP server
   port: 8080,
   secure: false, // Use true for 465, false for other ports
   auth: {
       user: process.env.USER_EMAIL, // Your email
       pass: process.env.APP_PASSWORD  // Your email password
   }
});

export default transporter;
