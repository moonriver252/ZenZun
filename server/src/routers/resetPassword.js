const express = require("express");
const resetPasswordRouter = express.Router();
const nodemailer = require('nodemailer');
const { mail } = require("../middlewares/mail");
const {
  userService,
//   userRefreshTokenService,
} = require("../service");



//임시 비밀번호 발송
resetPasswordRouter.patch("/user/resetPassword", mail, async (req, res, next) => {
  try {
      const password = req.password;
      const email = req.body.email;
      //const password = Math.random().toString().substr(2, 6);
      console.log(password);
      
     
      const userInfoRequired = { email };
      const updateData = {
          ...(password && { password })
      };

      const updatedPasswordInfo = await userService.resetPassword(
          userInfoRequired,
          updateData
      );

      res.status(200).json(updatedPasswordInfo);
  } catch (error) {
      next(error);
  }
});

module.exports =  resetPasswordRouter;