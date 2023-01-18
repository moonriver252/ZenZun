const express = require("express");
const mailRouter = express.Router();
const { mail } = require("../middlewares/mail");
const { usermail } = require("../middlewares/usermail");
const {
  mailService,
} = require("../service");


//이메일 인증
mailRouter.post('/sendEmail', usermail, async (req, res) => {
  res.status(201).json(req.authNum);
});

//임시 비밀번호 발송
mailRouter.patch("/user/resetPassword", mail, async (req, res, next) => {
  try {
      const password = req.password;
      const email = req.body.email;
      console.log(password);
      
     
      const userInfoRequired = { email };
      const updateData = {
          ...(password && { password })
      };

      const updatedPasswordInfo = await mailService.resetPassword(
          userInfoRequired,
          updateData
      );

      res.status(200).json(updatedPasswordInfo);
  } catch (error) {
      next(error);
  }
});

module.exports =  mailRouter;