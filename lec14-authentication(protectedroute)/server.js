require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const cookieParser = require("cookie-parser");
const UserRoutes = require("./src/routes/user.route");
const homeRoutes = require("./src/routes/home.route")

const app = express();

connectDB();

app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", UserRoutes);
app.use("/api/home", homeRoutes)

app.listen(3000, () => {
  console.log("running on port 3000");
});