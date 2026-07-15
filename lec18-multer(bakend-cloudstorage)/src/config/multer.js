const multer = require("multer");

//multiple phohto send karne ke liye or cloud pe file sahre every one see this :

let storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
