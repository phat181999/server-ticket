// src/services/board.service.ts

import { CreateBoardDto, UpdateBoardDto } from '../dtos/board.dto';
import Board from '../models/board.model';
import Ticket from '../models/ticket.model';
import Version from '../models/version.model';
import { CustomError } from '../utils/helpers/customeError.helper';

export class BoardService {
  async create(createBoardDto: CreateBoardDto): Promise<Board> {
    try {
      if (!createBoardDto.name || !createBoardDto.versionId) {
        throw new CustomError('Missing some fields');
      }
      const board = await Board.create(createBoardDto);
      return board;
    } catch (error) {
      throw new CustomError('Error creating board', 400);
    }
  }

  async get(id: number): Promise<Board | null> {
    try {
      if (!id) {
        throw new CustomError('Missing some fields');
      }
      const board = await Board.findByPk(id, {
        include: [{ model: Ticket }, { model: Version }],
      });
      if (!board) {
        throw new CustomError('Board not found', 404);
      }
      return board;
    } catch (error) {
      throw new CustomError('Error fetching board', 400);
    }
  }

  async update(id: number, updateBoardDto: UpdateBoardDto): Promise<Board> {
    try {
      if (!id) {
        throw new CustomError('Missing some fields');
      }
      if (!updateBoardDto.name || !updateBoardDto.versionId) {
        throw new CustomError('Missing some fields');
      }
      const board = await Board.findByPk(id);
      if (!board) {
        throw new CustomError('Board not found', 404);
      }
      await board.update(updateBoardDto);
      return board;
    } catch (error) {
      throw new CustomError('Error updating board', 400);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      if (!id) {
        throw new CustomError('Missing some fields');
      }
      const board = await Board.findByPk(id);
      if (!board) {
        throw new CustomError('Board not found', 404);
      }
      await board.destroy();
    } catch (error) {
      throw new CustomError('Error deleting board', 400);
    }
  }
}
