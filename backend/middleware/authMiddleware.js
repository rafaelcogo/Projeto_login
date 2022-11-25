const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // GET token from Header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // GET user from Token
      // Aqui estamos procurando o usuário pelo id, como selecinamos no controller
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

module.exports = { protect };
