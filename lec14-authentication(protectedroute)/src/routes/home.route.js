const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get(
  "/",
  (req, res, next) => {
    const token = req.cookies.secret;

    if (!token)
      return res.status(401).json({
        success: false,
        message: "token not found",
      });

    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decode)
      return res.status(401).json({
        success: false,
        message: "Invalid user",
      });

    next();
  },
  (req, res) => {
    res.status(200).json({
      message: "I m home route",
    });
  },
);

module.exports = router;
