const express = require("express");
const { loginRequired } = require("../middlewares/login_required");
const boardRouter = express.Router();
const { boardService } = require("../service");


//게시글 작성하기
boardRouter.post("/board", loginRequired, async (req, res, next) => {
    try { 
        const userId = req.userId;
        const content = req.body.content;
        const newBoard = await boardService.addBoard(userId, content);
        const boardId = newBoard.id
        res.status(201).json({'boardId':boardId})
    } catch (error) {
        next(error)
    }
});