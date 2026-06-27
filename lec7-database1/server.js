const express = require("express");
const { default: mongoose } = require("mongoose");
const UserModel = require("./models/user.model");

const app = express();

app.use(express.json());

const connectDb = async () => {
  await mongoose.connect(
    "mongodb://tanushprajapati403_db_user:dnfumDcpSfP0jGK9@ac-smfvhua-shard-00-00.e88idmn.mongodb.net:27017,ac-smfvhua-shard-00-01.e88idmn.mongodb.net:27017,ac-smfvhua-shard-00-02.e88idmn.mongodb.net:27017/?ssl=true&replicaSet=atlas-hr32lg-shard-0&authSource=admin&appName=fs-35backend",
  );
  console.log("mongodb connected");
};

connectDb();

app.get("/", (req, res) => {
  res.send("ok");
});

app.post("/create", async (req, res) => {
  const { name, email, password, mobile, gender } = req.body;

  if (!name || !email || !password || !mobile || !gender)
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });

  const newUser = await UserModel.create({
    name,
    email,
    password,
    mobile,
    gender,
  });

  return res.status(201).json({
    success: true,
    message: "User created",
    data: newUser,
  });
});

app.listen(3000, () => {
  console.log("server run hogya hai 3000 pe");
});
