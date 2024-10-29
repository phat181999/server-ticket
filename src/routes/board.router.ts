// src/routes/board.router.ts

import express from 'express';
import BoardController from '../controllers/board.controller';
import { BoardService } from '../services/board.service';

const boardRouter = express.Router();
const boardService = new BoardService();
const boardController = new BoardController(boardService);
// @ts-ignore
boardRouter.post('/create-board', (req, res) => boardController.createBoard(req, res));
// @ts-ignore
boardRouter.get('/:id', (req, res) => boardController.getBoard(req, res));
// @ts-ignore
boardRouter.put('/:id', (req, res) => boardController.updateBoard(req, res));
// @ts-ignore
boardRouter.delete('/:id', (req, res) => boardController.deleteBoard(req, res));

export { boardRouter };
