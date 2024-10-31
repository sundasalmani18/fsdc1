import Ticket from '../model/ticket.model.js';
import transporter from'../config/emailConfig.js';
import 'dotenv/config.js'

// Handle form submission
export const submitSupportForm = async (req, res) => {
   const { name, email, issue } = req.body;
   console.log(name ,email, issue)
  console.log(process.env.USER_EMAIL) 
  console.log(process.env.RECEIVER_EMAIL) 
   try {
       // Save ticket to MongoDB
       const ticket = new Ticket({ name, email, issue });
       await ticket.save();
       console.log("data save ",ticket)

       // Send email notification to support team
       const mailOptions = {
           from: req.body.email,
           to: process.env.RECEIVER_EMAIL,
           subject: `New Support Ticket from ${name}`,
           text: `Name: ${name}\nEmail: ${email}\nIssue: ${issue}`,
           html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Issue:</strong> ${issue}</p>`
       };

       await transporter.sendMail(mailOptions);

       // Response
       res.status(201).json({ message: 'Support ticket submitted and email sent successfully', ticket });
   } catch (error) {
       console.error(error.message);
       res.status(500).json({ message: 'Error submitting ticket or sending email' });
   }
};
