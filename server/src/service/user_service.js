const { User } = require("../db");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


class UserService {
  // 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
  constructor(user_model) {
    this.User = user_model;
  }

  // 회원가입
  async addUser(userInfo) {
    const { email, nickname, password } = userInfo;

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

    const newUserInfo = { email, nickname, password: hashedPassword };

    // db에 저장
    const createdNewUser = await this.User.create(newUserInfo);

    return createdNewUser;
  }

  //로그인
  async getUserToken(loginInfo) {
    const { email, password } = loginInfo;

    const user = await this.User.findOne({
        where: { email },
    });
    if (!user) {
        throw new Error(
            "가입되지 않은 이메일 입니다."
        );
    }

    const correctPasswordHash = user.password;

    const isPasswordCorrect = await bcrypt.compare(
        password,
        correctPasswordHash
    );

    if (!isPasswordCorrect) {
        throw new Error(
            "비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요."
        );
    }

    const secretKey = process.env.JWT_SECRET_KEY

    //const token = jwt.sign({ userId: user.dataValues.id, exp: Math.floor(Date.now()/1000)+(60 * 60 * 24) }, secretKey);
    const token = jwt.sign({ userId: user.id }, secretKey);
    
    return { token };
  }

    //마이페이지
    async getUserData(id) {
        const user = await this.User.findOne({
            attributes: [ 'email', 'nickname', 'profile_image' ],
            where: { id }});
    
    if(!user){
        throw new Error("가입 내역이 없습니다.");
    }
    return user;
  }


  //마이페이지 수정
  async setUser(userInfoRequired, updateData){
    try {
        const { id, checkPassword } = userInfoRequired;
        const user = await this.User.findOne({
            where: { id: id }
        });
        if (!user) {
            throw new Error("가입 내역이 없습니다.");
        }
        const hashedPassword = user.password;
        const isPasswordSame = await bcrypt.compare(
            checkPassword,
            hashedPassword
        );

        if (!isPasswordSame) {
            throw new Error("현재 비밀번호가 일치하지 않습니다.")
        }

        const { password } = updateData;
        if (password) {
            const newHashedPassword = await bcrypt.hash(password, 10);
            updateData.password = newHashedPassword;
        }

        const userChange = await this.User.update(updateData, {
            where: { id: id }
        });

        return userChange
    }
    catch (err){
        if(err=isPasswordSame){
            console.log("현재 비밀번호가 일치하지 않습니다.", err);}
        
    }
  }

  //회원탈퇴
  async deleteUserData(id) {
    const deletedCount = await this.User.destroy({
      where: { id: id },
    }); 

    // 삭제에 실패한 경우, 에러 메시지 반환
    if (!deletedCount) {
      throw new Error(`${id} 사용자 데이터 삭제에 실패하였습니다.`);
    }
    return { result: "success" };
  }


}

module.exports = new UserService(User);