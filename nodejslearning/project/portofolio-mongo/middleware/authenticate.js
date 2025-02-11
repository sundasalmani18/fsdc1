import jwt from 'jsonwebtoken';
import User from '../model/auth.model.js'; // Assuming you have a User model

// export const authenticate = async (req, res, next) => {
//   // Get token from Authorization header
//   const token = req.header('Authorization')?.split(' ')[1]; // "Bearer token"

//   if (!token) {
//     return res.status(401).send('Access Denied: No Token Provided');
//   }

//   try {
//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Find the user by the decoded userId
//     const user = await User.findById(decoded.userId);
//     if (!user) return res.status(401).send('User not found');

//     // Check if user is an admin
//     if (user.role !== 'admin') {
//       return res.status(403).send('Access Denied: You are not an admin');
//     }

//     req.user = user;  // Attach user information to the request object
//     next();  // Proceed to the next middleware/route handler
//   } catch (err) {
//     return res.status(400).send('Invalid Token');
//   }
// };



export const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1]; // Extract Bearer token

    if (!token) {
      return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId);

    if (!req.user) {
      return res.status(404).json({ message: "User not found" });
    }

    next(); // Proceed to the next function
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export const authorizeAdmin = async (req, res, next) => {
  try {
    if (!req.user || req.user.role !== "ADMIN") {
      return res.status(403).json({ message: "Access Denied. Not an Admin" });
    }
    next();
  } catch (error) {
    return res.status(403).json({ message: "Access Denied" });
  }
};
