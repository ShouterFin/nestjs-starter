import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsDateString } from 'class-validator';

export class CreatePetDto {
  @ApiProperty({ example: 'Fluffy' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'A cute cat' })
  @IsString()
  @Length(10, 200)
  description: string;

  @ApiProperty({ example: 'yyyy-mm-dd' })
  @IsDateString() // This decorator checks if the value is a valid date string, @isDate differs from this decorator as it checks if the value is a valid date object
  date_of_birth: Date;
}