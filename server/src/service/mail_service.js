const { User } = require("../db");
const bcrypt = require("bcrypt")


class MailService {
  constructor(user_model) {
    this.User = user_model;
  }
   
  //임시 비밀번호 발송
  async resetPassword(userInfoRequired, updateData){
    try {
        const { email } = userInfoRequired;
        const user = await this.User.findOne({
            where: { email: email }
        });
        
        if (!user) {
            throw new Error("가입 내역이 없습니다.");
        }

        const { password } = updateData;
        if (password) {
            const newHashedPassword = await bcrypt.hash(password, 10);
            updateData.password = newHashedPassword;
        }

        const userChange = await this.User.update(updateData, {
            where: { email: email }
        });

        return userChange
    }
    catch (err){
        if(err){
            console.log(err);
          }
        
    }
  }

}

module.exports = new MailService(User);