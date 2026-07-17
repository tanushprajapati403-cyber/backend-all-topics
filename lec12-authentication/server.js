const express = require("express");
const connectDB = require("./src/config/db");
const USerRouter = require("./src/routes/user.route");
const cookieParser = require("cookie-parser");

connectDB();

const app = express();

// nmp i cookieParserdownload ke badd ye likhe ye parcel karega:
app.use(cookieParser());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("i m server");
});

app.use("/api/auth", USerRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
