import { IsOptional, IsDateString, IsInt, IsString } from 'class-validator';

export class FilterPetsDto {
  @IsOptional()
  @IsDateString()
  birthDateFrom?: string;
  @IsOptional()
  @IsDateString()
  birthDateTo?: string; 

  @IsOptional()
  @IsInt()
  gender?: number;

  @IsOptional()
  @IsString()
  species?: string;

  @IsOptional()
  @IsInt()
  weight?: number;

  @IsOptional()
  @IsString()
  hairType?: string;

  @IsOptional()
  @IsString()
  hairColor?: string;

  @IsOptional()
  @IsInt()
  province?: number;

  @IsOptional()
  @IsInt()
  city?: number;
}
