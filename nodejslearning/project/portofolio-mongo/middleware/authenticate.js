import jwt from 'jsonwebtoken';
import User from '../model/auth.model.js'; // Assuming you have a User model

export const authenticate = async (req, res, next) => {
  // Get token from Authorization header
  const token = req.header('Authorization')?.split(' ')[1]; // "Bearer token"

  if (!token) {
    return res.status(401).send('Access Denied: No Token Provided');
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by the decoded userId
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(401).send('User not found');

    // Check if user is an admin
    if (user.role !== 'admin') {
      return res.status(403).send('Access Denied: You are not an admin');
    }

    req.user = user;  // Attach user information to the request object
    next();  // Proceed to the next middleware/route handler
  } catch (err) {
    return res.status(400).send('Invalid Token');
  }
};
