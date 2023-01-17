const express = require("express");
const userRouter = express.Router();
const awsS3 = require("../middlewares/aws-s3");
//const upload = require("../middlewares/upload");

const { loginRequired } = require("../middlewares/login_required");
const { mail } = require("../middlewares/mail");
const {
   userService,
//   userRefreshTokenService,
} = require("../service");


//이메일 인증
userRouter.post('/sendEmail', mail, async (req, res) => {
      res.status(201).json(req.authNum);
});
  

//회원가입
userRouter.post("/user", async (req, res, next) => {
    try {
        const email = req.body.email;
        const checkNumber = req.body.checkNumber;
        const nickname = req.body.nickname;
        // const profile_image = req.body.profile_image;
        const password = req.body.password;

        const newUser = await userService.addUser({
            email,
            nickname,
            // profile_image,
            password
        });

        res.status(201).json(newUser);
        } catch (error) {
            next(error)
        }
});


//로그인
userRouter.post("/login", async (req, res, next) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        const userToken = await userService.getUserToken({ email, password });
        res.status(200).json({userToken:userToken.token});
    } catch(error){
        next(error)
    }
});

//마이페이지
userRouter.get("/user",loginRequired, async function (req, res, next) {
    try{
        const userId = req.userId;
        const currentUserInfo = await userService.getUserData(userId);
        res.status(200).json(currentUserInfo);
    } catch (error) {
        next(error);
    }
});

//마이페이지 수정
userRouter.patch("/user", loginRequired, awsS3.single("profile_image"), async (req, res, next) => {
    try {
        const { nickname, password } = req.body;
        const { checkPassword } = req.body;
        if (!checkPassword) {
            throw new Error("정보를 변경하려면, 현재의 비밀번호가 필요합니다.");
        }
        const id = req.userId;
        let profile_image = null;
        if(req.file){
          profile_image = req.file.location;
        }
        const userInfoRequired = { id, checkPassword };
        const updateData = {
            ...(nickname && { nickname }),
            ...(profile_image && { profile_image }),
            ...(password && { password })
        };

        const updatedUserInfo = await userService.setUser(
            userInfoRequired,
            updateData
        );

        res.status(200).json(updatedUserInfo);
    } catch (error) {
        next(error);
    }
});

//회원탈퇴
userRouter.delete("/user", loginRequired, async function (req, res, next) {
    try {
      const id = req.userId;
      const deleteResult = await userService.deleteUserData(id);
      res.status(200).json(deleteResult);
    } catch (error) {
      next(error);
    }
  });
  

module.exports = userRouter;