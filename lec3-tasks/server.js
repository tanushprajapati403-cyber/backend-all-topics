const express = require("express");

const app = express();

// midelbear ka use karna hai jabb data body le ess ke liye task1 bale mein jakar dekho... 
// aage ka liye task1 dekho.

app.get("/data", (req, res) => {
  const data = [
    {
      name: "tanush",
    },
    {
      name: "nihal",
    },
  ];
  res.send(data);
});

app.get("/greet", (req, res) => {
  res.send("good evening......");
});

app.post("/", (req, res) => {
  const body = req.body;
  res.send(body);
});

app.listen(3000, () => {
  console.log("3000 port");
});
