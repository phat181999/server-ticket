import { Request, Response } from 'express';
import { VersionService } from '../services/version.service';
import { CustomError } from '../utils/helpers/customeError.helper';
import { CreateVersionDto, UpdateVersionDto } from '../dtos/version.dto';

export default class VersionController {
  constructor(private versionService: VersionService) {}

  async createVersion(req: Request, res: Response): Promise<Response> {
    const createVersionDto: CreateVersionDto = req.body;

    try {
      const version = await this.versionService.create(createVersionDto);
      return res.status(201).json({ version, message: 'Version created successfully' });
    } catch (error) {
      console.error('Error in VersionController.createVersion:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateVersion(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);
    const updateVersionDto: UpdateVersionDto = req.body;

    try {
      const version = await this.versionService.update(id, updateVersionDto);
      return res.status(200).json({ version, message: 'Version updated successfully' });
    } catch (error) {
      console.error('Error in VersionController.updateVersion:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getVersion(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    try {
      const version = await this.versionService.get(id);
      return res.status(200).json(version);
    } catch (error) {
      console.error('Error in VersionController.getVersion:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getAllVersion(req: Request, res: Response): Promise<Response> {
    try {
      const version = await this.versionService.getAll();
      return res.status(200).json({version: version, messages: 'Get Version Successfully'});
    } catch (error) {
      console.error('Error in VersionController.getVersion:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async deleteVersion(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    try {
      await this.versionService.delete(id);
      return res.status(204).send();
    } catch (error) {
      console.error('Error in VersionController.deleteVersion:', error);
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
