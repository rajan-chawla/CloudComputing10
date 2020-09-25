var express = require("express");
var router = express.Router();
var tesseract = require("tesseract.js");
var multer = require("multer");
var upload = multer({ dest: 'uploads/images' });
var pool = require("./db");
var user = require("./user");
router.use("/", user);

router.post("/api/converttotext",function (req, res){
    console.log("Request Message body------", req.body.fileType)
    tesseract.recognize(req.body.fileContent, 'eng', { 
        logger: m => {
            console.log(m)
        } 
    })
    .then(({ data: { text } }) => {
        console.log(text)
        res.send({
            code: 200,
            success: "Sucess",
            result: text
          });
    })
});

module.exports = router;
