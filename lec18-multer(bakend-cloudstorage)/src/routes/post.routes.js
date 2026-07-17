const express = require("express");
const upload = require("../config/multer");
const getImageController = require("../controllers/post.controller");

const router = express.Router();

router.post("/", upload.single("image"), getImageController);

module.exports = router;
