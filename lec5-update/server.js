const express = require("express");

const app = express();

app.use(express.json());

const ganjaArr = [
  {
    ganja: "weed",
    rate: "400 ki pudia",
  },
  {
    ganja: "maal",
    rate: "500 ki pudia",
  },
  {
    ganja: "lekha",
    rate: "350 ki pudia",
  },
  {
    ganja: "golmal",
    rate: "700 ki pudia",
  },
  {
    ganja: "charas",
    rate: "200 ki pudia",
  },
];

app.post("/", (req, res) => {
  try {
    let { ganja, rate } = req.body;

    if (!ganja || !rate) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    ganjaArr.push({
      ganja,
      rate,
    });

    return res.status(201).json({
      success: true,
      message: "Ganja rakh liya",
      data: { ganja, rate },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.get("/ganjas", (req, res) => {
  try {
     // 202 sucessfully run
    return res.status(200).json({
      success: true,
      message: "data fetched successfully",
      data: ganjaArr,
    });
  } catch (error) {
    // 500 internal errorr
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

app.patch("/update-data/:id", (req, res) => {
  let { id } = req.params;

  let { name } = req.body;

  if (!name)
    return res.status(400).json({
      success: false,
      message: "please send update data",
    });

  let updateData = ganjaArr.find((elem) => elem.ganja === id);

  if(!updateData) return res.status(404).json({
    success:false, 
    message:"Data not found with that id"
  })

  updateData.ganja = name;

  return res.status(200).json({
    success: true,
    message: "data updated",
    data: ganjaArr,
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});