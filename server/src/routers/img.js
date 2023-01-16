const awsS3 = require("../middlewares/aws-s3");
const express = require("express");
const img = express.Router();

img.post('/img', awsS3.single('image'), (req,res)=>{
    res.send('good!')
})

module.exports = img;