const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
process.env.AWS_ACCESS_KEY_ID;
process.env.AWS_SECRET_ACCESS_KEY;
process.env.REGION;

const s3 = new aws.S3();
const awsS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'zenzun',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, `${Date.now()}_${Math.floor(Math.random() * 100000)}_${file.originalname}`);
    },
  }),
});

module.exports = awsS3;