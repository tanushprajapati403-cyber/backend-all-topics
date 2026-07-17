const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Missing fields",
        success: false,
      });
    }

    // hash password :- hash karne kai liye (npm install bcrypt) yee download kare

    //hash mai return karna padta hai:
    // const hash = await bcrypt.hash(plainPassword, saltRounds);
    // return hash;

    //              (or)
 
    // hashSync mein return nahii karna padta hai:
    const hashPass = bcrypt.hashSync(password, 10);

    const user = await UserModel.create({
      name,
      email,
      password: hashPass,
    });

    // tokken generate:- jwt digital ID card (token banata hai)
    // instal kare jwt (npm install jsonwebtoken)

    const token = jwt.sign({ id: user._id }, "x,ckcgacagcgcackgckcg", {
      expiresIn: "1h",
    });

    // set token in cookies:- store karne token ko cookie mein

    res.cookie("token",token)

    return res.status(201).json({
      message: "user registered",
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
      error,
    });
  }
};

module.exports = registerController;
