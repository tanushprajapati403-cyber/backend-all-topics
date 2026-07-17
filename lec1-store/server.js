// make a server:

const express = require('express'); 

const app = express();

app.get("/" , (req , res)=>{
  res.send("OKKK mein tumhara server hu");
});

app.listen(3000 , ()=>{
    console.log("server is running on port 3000")
});