require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.port || 4000;

app.listen(PORT, () => {
  console.log(`server is running n port ${PORT}`);
});
