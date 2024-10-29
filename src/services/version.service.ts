import { CreateVersionDto, UpdateVersionDto } from '../dtos/version.dto';
import Board from '../models/board.model';
import Ticket from '../models/ticket.model';
import Version from '../models/version.model';
import { CustomError } from '../utils/helpers/customeError.helper';

export class VersionService {
  async create(createVersionDto: CreateVersionDto): Promise<Version> {
    try {
      if (!createVersionDto.version) {
        throw new Error('Version is missing');
      }
      const version = await Version.create(createVersionDto);
      return version;
    } catch (error) {
      throw new CustomError('Error creating version', 400);
    }
  }

  async update(id: number, updateVersionDto: UpdateVersionDto): Promise<Version> {
    try {
      if (!id) {
        throw new CustomError('Missing some fields');
      }
      if(!updateVersionDto.version) {
        throw new Error('Version is missing');
      }
      const versionExist = await Version.findByPk(id);
      if (!versionExist) {
        throw new CustomError('Version not found', 404);
      }
      await versionExist.update(updateVersionDto);
      return versionExist;
    } catch (error) {
      throw new CustomError('Error updating version', 400);
    }
  }

  async get(id: number): Promise<Version | null> {
    try {
      if (!id) {
        throw new CustomError('Missing some fields');
      }
      const version = await Version.findByPk(id, {
        include: [
          {
            model: Board,
            required: true,
          },
          {
            model: Ticket,
            required: true,
          }
        ]
      });

      if (!version) {
        throw new CustomError('Version not found', 404);
      }

      return version;
    } catch (error) {
      throw new CustomError('Error retrieving version', 500);
    }
  }

  async getAll(): Promise<Version[]> {
    try {
      const tickets = await Version.findAll();
      if (tickets.length === 0) {
        throw new CustomError('No Verion found', 404);
      }
      return tickets;
    } catch (error) {
      throw new CustomError('Error retrieving ticket', 500);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      const version = await Version.findByPk(id);
      if (!version) {
        throw new CustomError('Version not found', 404);
      }
      await version.destroy();
    } catch (error) {
      throw new CustomError('Error deleting version', 400);
    }
  }
}
