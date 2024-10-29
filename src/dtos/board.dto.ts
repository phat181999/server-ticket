import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateBoardDto {
  @IsNumber()
  @IsNotEmpty()
  versionId!: number;

  @IsString()
  @IsNotEmpty()
  name!: string;
}

export class UpdateBoardDto {
  @IsNumber()
  @IsOptional()
  versionId?: number;

  @IsString()
  @IsOptional()
  name?: string;
}

export class GetBoardDto {
  @IsNumber()
  @IsNotEmpty()
  versionId!: number;

  @IsString()
  @IsNotEmpty()
  name!: string;
}
