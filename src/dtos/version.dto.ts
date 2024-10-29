import { IsNotEmpty, IsNumber, IsObject, IsOptional, IsDateString } from 'class-validator';

export class CreateVersionDto {
  @IsObject()
  @IsNotEmpty()
  state!: object;

  @IsNumber()
  @IsNotEmpty()
  version!: number;

  @IsDateString()
  @IsNotEmpty()
  createdAt!: Date;
}

export class UpdateVersionDto {
  @IsObject()
  @IsOptional()
  state?: object;

  @IsNumber()
  @IsOptional()
  version?: number;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;
}

export class GetVersionDto {
  @IsNumber()
  version!: number;

  @IsObject()
  @IsOptional()
  state?: object;

  @IsDateString()
  createdAt!: Date;

  @IsDateString()
  @IsOptional()
  updatedAt?: Date;
}
