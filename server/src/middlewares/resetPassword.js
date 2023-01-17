const nodemailer = require('nodemailer');

const resetPassword = async (req, res, next) => {
  let authNum = Math.random().toString().substr(2, 6);

//   userRouter.patch("/user/resetPassword", resetPassword, async (req, res, next) => {
//     try {
        
        // const password = authNum;
        // console.log(password);
       
//         const userInfoRequired = { email };
//         const updateData = {
//             ...(password && { password })
//         };

//         const updatedPasswordInfo = await userService.resetPassword(
//             userInfoRequired,
//             updateData
//         );

//         res.status(200).json(updatedPasswordInfo);
//     } catch (error) {
//         next(error);
//     }
// });
  
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
    subject: '임시 비밀번호 입니다.',
    text: authNum,
  });

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    }
    console.log('Finish sending email : ' + info.response);
    res.send(authNum);
    transporter.close();
  });

  req.authNum = authNum;
  
  next();
};

module.exports = { resetPassword };