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

    //게시글 수정 (본인 게시글만 수정 가능)
    async updateBoard(userId, boardId, content) {
        const love = {
            ...content
        };
        const updateMyBoard = await this.Board.update(love, {
            where: { id: boardId,
                    user_id: userId }
        });
        
        return updateMyBoard;
    }

        //게시글 삭제 (본인 게시글만 삭제 가능)
        async deleteBoard(userId, boardId) {
            const deleteMyBoard = await this.Board.destroy({
                where: { id: boardId,
                        user_id: userId }
            });
            
            return deleteMyBoard;
        }
    
}

module.exports = new BoardService(Board);