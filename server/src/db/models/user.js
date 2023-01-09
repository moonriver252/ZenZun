const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id:{
                type: Sequelize.INTEGER,
                allowNull:false,
                primaryKey: true,
                autoIncrement: true,
            },
            email:{
                type: Sequelize.STRING(200),
                allowNull: false,
                unique: true,
            },
            nickname: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
              },
              profile_image: {
                type: Sequelize.STRING(225),
                allowNull: true,
              },
              password: {
                type: Sequelize.STRING(225),
                allowNull: false,
              },
              created_at : {
                type : Sequelize.DATE,
                allowNull : false,
                defaultValue : Sequelize.NOW,
            },
        },
        {
            sequelize,
            timestamps: false, //creatat+deleteat
            underscored: true, //스네이크케이스로 이름변경
            modelName: 'User',
            tableName: 'user',
            paranoid: false, //삭제시 완전삭제x -> 로그남김
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){
        db.User.hasMany(db.Board, { foreignKey: 'user_id', sourceKey: 'id'});
        db.Board.belongsTo(db.User, {onDelete:'cascade'});
        db.User.hasMany(db.Auth, { foreignKey: 'user_id', sourceKey: 'id'});
        db.Auth.belongsTo(db.User, {onDelete:'cascade'});
    }

};