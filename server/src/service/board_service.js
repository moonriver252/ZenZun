const { User } = require("../db");
const { Board } = require("../db/models");

class BoardService {
    constructor(board_model) {
        this.Board = board_model;
    }

    //게시글 작성
    async addBoard(userId, content) {
        const finalData = {
            ...content,
            user_id: userId
        };
        const createBoard = await this.Board.create(finalData);
        
        return createBoard;
    }

    //전체 게시글 조회
    async getAllBoard() {
        const board = await this.Board.findAll();
        
        return board;
    }
}

module.exports = new BoardService(Board);