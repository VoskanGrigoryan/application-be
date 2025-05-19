import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { FilterPetsDto } from './dto/filter-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post('/create-pet')
  async createPet(@Body() createPetDto: CreatePetDto) {
    return this.petsService.createPet(createPetDto);
  }

  @Get('/get-all-pets')
  async getAllPets() {
    return this.petsService.getAllPets();
  }

  @Get('/pet/:id')
  async getPetById(@Param('id') id: string) {
    const pet = await this.petsService.getPetById(id);
    if (!pet) {
      throw new NotFoundException(`Pet with id ${id} not found`);
    }
    return pet;
  }

  @Get('/filter')
  async filterPets(@Query() filters: FilterPetsDto) {
    return this.petsService.filterPetsByParams(filters);
  }
}
