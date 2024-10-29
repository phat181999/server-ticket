import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/helpers/customeError.helper';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const status = err instanceof CustomError ? err.statusCode : 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
};
