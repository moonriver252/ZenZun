const express = require("express");
const userRouter = express.Router();
//const upload = require("../middlewares/upload");

// const { loginRequired } = require("../middlewares/login_required");
const {
   userService,
//   userTagService,
//   userRefreshTokenService,
} = require("../service");


//회원가입
userRouter.post("/user", async (req, res, next) => {
    try {
        const email = req.body.email;
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
userRouter.get("/", /*loginRequired*/ async function (req, res, next) {
    try{
        const email = req.eamil;
        const currentUserInfo = await userService.getUserData(email);
        res.status(200).json(currentUserInfo);
    } catch (error) {
        next(error);
    }
});

module.exports = userRouter;