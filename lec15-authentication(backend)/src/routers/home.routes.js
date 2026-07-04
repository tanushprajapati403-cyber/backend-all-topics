const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const authMiddleware = require("../middlewaare/auth.middleware");

const router = express.Router();

router.get("/", authMiddleware , (req, res) => {
  res.status(200).json({
    message: "I m home route",
    data: req.user,
  });
});

module.exports = router;
