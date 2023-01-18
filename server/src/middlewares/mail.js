const nodemailer = require('nodemailer');

const mail = async (req, res, next) => {
  let authNum = Math.random().toString().substr(2, 6);
  const password = authNum;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  let mailOptions = await transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to: req.body.email,
    subject: '임시 비밀번호 입니다. 로그인 후 비밀번호를 변경해주세요.',
    text: password,
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
    console.log('Finish sending email : ' + info.response);
    res.send(password);
    transporter.close();
  });

  req.password = password;
  
  next();
};

module.exports = { mail };

