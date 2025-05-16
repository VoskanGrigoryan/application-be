import {
  IsString,
  IsDateString,
  IsBoolean,
  IsInt,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';

export class CreatePetDto {
  @IsString()
  name: string;

  @IsDateString()
  birth_date: string;

  @IsInt()
  gender: number;

  @IsInt()
  person_id: number;

  @IsString()
  description: string;

  @IsBoolean()
  has_spotlight: boolean;

  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  trait_ids: number[];
}
