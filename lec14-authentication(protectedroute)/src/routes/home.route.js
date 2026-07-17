const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

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
   
    const user = await UserModel.findById(decode.id);
   
    // user add ker diya req se boo bhhe esse se hoagaga suru se nahii hoata add.
    req.user = user ;

    next();
  },
  (req, res) => {
    res.status(200).json({
      message: "I m home route",
      data: req.user,
    });
  },
);

module.exports = router;
