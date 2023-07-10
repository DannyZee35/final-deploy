const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');
const dotenv = require('dotenv').config();
// Modify the authMiddleware function to add the decoded token to the req object
const authMiddleware = (allowedRoles) => {
  return async (req, res, next) => {
    let token;
    res.set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
        token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        req.decodedToken = decodedToken;
        const userRole = decodedToken.user.role;
        if (!allowedRoles.includes(userRole)) {
          return res.status(403).send('Access denied');
        }
        const user = await User.findById(decodedToken.id);
        if (!user) {
          return res.status(401).send('Unauthorized');
        }
        req.user = user;
        next();
      } catch (error) {
        console.error(error);
        return res.status(401).send('Unauthorized');
      }
    } else {
      return res.status(401).send('Unauthorized');
    }
  };
};

module.exports = {
  authMiddleware,
};
