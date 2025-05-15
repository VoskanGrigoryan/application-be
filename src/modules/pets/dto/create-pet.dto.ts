import { IsString, IsDateString, IsBoolean, IsInt } from 'class-validator';

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

  @IsInt()
  trait_id: number;

  @IsBoolean()
  has_spotlight: boolean;
}