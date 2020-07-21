var express = require("express");
var router = express.Router();
var tesseract = require("tesseract.js");
var multer = require("multer");
var upload = multer({ dest: 'uploads/images' });
var pool = require("./db");
var user = require("./user");
router.use("/", user);

router.post("/api/converttotext",upload.any(), (req, res) =>{
    var photo = req.files[0].path;
    var data = "Error loading in data. Check router.js";
    tesseract.recognize(photo, 'eng', { 
        logger: m => {
            console.log(m)
        } 
    })
    .then(({ data: { text } }) => {
        res.send(text)
    })
});

module.exports = router;