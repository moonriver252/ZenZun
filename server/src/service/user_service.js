const { User } = require("../db");
const bcrypt = require("bcrypt")
//const jwt = require("jsonwebtoken");


class UserService {
  // 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
  constructor(user_model) {
    this.User = user_model;
  }

  // 회원가입
  async addUser(userInfo) {
    const { email, nickname, profile_image, password } = userInfo;

    //중복확인
    const emailResult = await this.User.findOne({
      where: { email },
    });
    if (emailResult) {
      throw new Error('중복된 이메일입니다.');
    }

    const nicknameResult = await this.User.findOne({
      where: { nickname },
    });
    if (nicknameResult) {
      throw new Error('중복된 닉네임입니다.');
    }


    // 우선 비밀번호 해쉬화(암호화)
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserInfo = { email, nickname, password: hashedPassword, profile_image };

    // db에 저장
    const createdNewUser = await this.User.create(newUserInfo);

    return createdNewUser;
  }
}

module.exports = new UserService(User);