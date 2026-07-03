require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const userRouter = require("./src/routers/user.routes");
const homeRouter = require("./src/routers/home.routes");
const cookieParser = require("cookie-parser");

const app = express();

connectDB();

app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/home", homeRouter);

app.listen(3000, () => {
  console.log("running on port 3000");
});
