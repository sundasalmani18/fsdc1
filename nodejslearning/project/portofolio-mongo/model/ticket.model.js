import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
   },
   email: {
       type: String,
       required: true,
   },
   issue: {
       type: String,
       required: true,
   },
   status: {
       type: String,
       enum: ['open', 'in-progress', 'resolved', 'closed'],
       default: 'open',
   },
   createdAt: {
       type: Date,
       default: Date.now,
   },
});

export default mongoose.model('Ticket', TicketSchema);
