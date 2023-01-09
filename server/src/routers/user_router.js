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
userRouter.post("/", async (req, res, next) => {
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

module.exports = userRouter;