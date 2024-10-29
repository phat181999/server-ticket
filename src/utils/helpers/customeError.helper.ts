import { HttpStatusCodes } from "../contants/StatusCode.constant";

export class CustomError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number = HttpStatusCodes.INTERNAL_SERVER_ERROR) {
    super(message);
    this.statusCode = statusCode;
  }
}
