require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const userRouter = require("./src/routers/user.routes");
const homeRouter = require("./src/routers/home.routes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173/",
    credentials: true,
  }),
);

connectDB();

app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/home", homeRouter);

app.listen(3000, () => {
  console.log("running on port 3000");
});
