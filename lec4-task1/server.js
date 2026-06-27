const express = require("express");

const app = express();

app.use(express.json());

let arr = [];

app.post("/getData", (req, res) => {
  let { frame, rate, sell } = req.body;

  if (!frame || !rate || !sell) {
    res.send({
      message: "All fields are required..",
    });
  }

  arr.push({
    frame,
    rate,
    sell,
  });

  res.send("ok data added");
});


app.get('/data', (req, res) =>{
    res.send(arr)
})

app.listen(5001, () => {
  console.log("Server si running on port 5001");
});