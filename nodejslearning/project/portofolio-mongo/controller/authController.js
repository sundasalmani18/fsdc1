import User from '../model/auth.model.js'
import jwt from "jsonwebtoken";

// Register new user
 export const authRegister= async (req, res) => {
    const { username, password ,role} = req.body;
  
    try {
      const user = new User({ username, password,role });
      await user.save();
      res.status(201).send('User registered');
    } catch (err) {
      res.status(400).send('Error registering user');
    }
  };
  
  // Login user
  export const authLogin= async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user) return res.status(400).send('Invalid credentials');
  
      const isMatch = await user.comparePassword(password);
      if (!isMatch) return res.status(400).send('Invalid credentials');
  
      // Generate JWT
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(200).json({
         token,
         user: {
          id: user._id,      // User ID
          username: user.username,  // Username
          // You can also include more data here (e.g., email, role)
        },
      });
      
    } catch (err) {
      res.status(400).send('Error logging in');
    }
  };
  
