const { User } = require("../db");
const { Board } = require("../db/models");

class BoardService {
    constructor(board_model) {
        this.Board = board_model;
    }

    async addBoard(userId, content) {
        const finalData = {
            ...content,
            user_id: userId
        };
        const createBoard = await this.Board.create(finalData);
        
        return createBoard;
    }
}

module.exports = new BoardService(Board);