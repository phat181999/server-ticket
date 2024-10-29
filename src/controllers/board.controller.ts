
import { Request, Response } from 'express';
import { BoardService } from '../services/board.service';
import { CreateBoardDto, UpdateBoardDto } from '../dtos/board.dto';
import { CustomError } from '../utils/helpers/customeError.helper';

export default class BoardController {
  constructor(private boardService: BoardService) {}

  async createBoard(req: Request, res: Response): Promise<Response> {
    const createBoardDto: CreateBoardDto = req.body;

    try {
      const board = await this.boardService.create(createBoardDto);
      return res.status(201).json({ board, message: 'Board created successfully' });
    } catch (error) {
      console.error('Error in BoardController.createBoard:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getBoard(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    try {
      const board = await this.boardService.get(id);
      return res.status(200).json(board);
    } catch (error) {
      console.error('Error in BoardController.getBoard:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateBoard(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const updateBoardDto: UpdateBoardDto = req.body;

    try {
      const board = await this.boardService.update(id, updateBoardDto);
      return res.status(200).json({ board, message: 'Board updated successfully' });
    } catch (error) {
      console.error('Error in BoardController.updateBoard:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteBoard(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    try {
      await this.boardService.delete(id);
      return res.status(204).send();
    } catch (error) {
      console.error('Error in BoardController.deleteBoard:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
