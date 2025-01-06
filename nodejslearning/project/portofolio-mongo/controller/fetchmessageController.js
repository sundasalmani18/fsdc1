import { console } from 'inspector';
import Message from '../model/messge.model.js'



// Fetch all messages from the database
 export const fetchMessage=  async (req, res) => {

  const { userId } = req.params;
  console.log("userId",userId)
  try {
    const messages = await Message.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).send('Error fetching messages');
  }
};
  