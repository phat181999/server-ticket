
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { TicketStatus } from '../utils/contants/ticker.constant';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  boardId!: number;

  @IsOptional()
  status?: TicketStatus;
}

export class UpdateTicketDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  boardId?: number;

  @IsOptional()
  status?: TicketStatus;
}

export class GetTicketDto {
  title!: string;
  description!: string;
  boardId!: number;
  status!: TicketStatus;
}
