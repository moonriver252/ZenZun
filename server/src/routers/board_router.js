const express = require("express");
const { loginRequired } = require("../middlewares/login_required");
const boardRouter = express.Router();
const { boardService } = require("../service");


//게시글 작성
boardRouter.post("/board", loginRequired, async (req, res, next) => {
    try { 
        const userId = req.userId;
        const content = req.body;
        const newBoard = await boardService.addBoard(userId, content);

        res.status(201).json(newBoard)
    } catch (error) {
        next(error)
    }
});

//전체 게시글 조회
boardRouter.get("/board", async function (req, res, next) {
    try {
      // 전체 사용자 목록을 얻음
      const board = await boardService.getAllBoard();
  
      // 사용자 목록(배열)을 JSON 형태로 프론트에 보냄
      res.status(200).json(board);
    } catch (error) {
      next(error);
    }
});

//게시글 수정 (본인 게시글만 수정 가능)
boardRouter.patch("/board/:board_id", loginRequired, async (req, res, next) => {
    try {
      const userId = req.userId;
      const boardId = req.params.board_id;
      const content = req.body;

      const patchBoard = await boardService.updateBoard(userId, boardId, content);
  
      res.status(201).json(patchBoard);
    } catch (error) {
      next(error);
    }
});
  

//게시글 삭제하기 (본인 게시글만 삭제 가능)
boardRouter.delete("/board/:board_id", loginRequired, async (req, res, next) => {
    try {
      const userId = req.userId;
      const boardId = req.params.board_id;

      const deleteBoard = await boardService.deleteBoard(userId, boardId);
  
      res.status(201).json(deleteBoard);
    } catch (error) {
      next(error);
    }
});


module.exports = boardRouter;