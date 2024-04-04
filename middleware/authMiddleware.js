// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Middleware function to verify JWT token
const authMiddleware = (req, res, next) => {
  // Get token from request header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Authorization token not provided' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);

    // Attach user information to request object
    req.user = decoded.user;

    // Proceed to next middleware
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
