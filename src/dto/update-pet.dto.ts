import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, Length, IsOptional, IsDateString } from 'class-validator';

export class UpdatePetDto {
  @ApiPropertyOptional({ example: 'Fluffy Updated' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 'A very cute cat' })
  @IsOptional()
  @IsString()
  @Length(10, 200)
  description?: string;

  @ApiPropertyOptional({ example: 'yyyy-mm-dd' })
  @IsOptional()
  @IsDateString()
  date_of_birth?: Date;
}