const express = require("express");
const productroutes = require("./src/routes/product.routes")
const connectDB = require("./src/config/db");


const app = express();

app.use(express.json());

connectDB();

app.use("/api/product" , productroutes )


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
