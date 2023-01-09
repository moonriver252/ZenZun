const Sequelize = require('sequelize');

module.exports = class Board extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id:{
                type: Sequelize.INTEGER,
                allowNull:false,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            content: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            created_at : {
                type : Sequelize.DATE,
                allowNull : false,
                defaultValue : Sequelize.NOW,
            },
            updated_at : {
                type : Sequelize.DATE,
                allowNull : false,
                defaultValue : Sequelize.NOW,
            },
        },
        {
            sequelize,
            timestamps: false, //creatat+deleteat
            underscored: true, //스네이크케이스로 이름변경
            modelName: 'Board',
            tableName: 'board',
            paranoid: false, //삭제시 완전삭제x -> 로그남김
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
};