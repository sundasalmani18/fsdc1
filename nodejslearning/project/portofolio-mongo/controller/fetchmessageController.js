import Message from '../model/messge.model.js'



// Fetch all messages from the database
 export const fetchMessage= async (req, res) => {
    try {
      const messages = await Message.find().sort({ timestamp: 1 });
      res.json(messages);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  };
  