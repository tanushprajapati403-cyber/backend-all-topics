const express= require("express");
const upload = require("../config/multer");
const getImageController = require("../controllers/post.controller");

const router = express.Router();

router.post("/" , upload.array("images" , 5) , getImageController )

module.exports = router;