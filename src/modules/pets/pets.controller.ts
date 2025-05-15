// src/pets/pets.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  async create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }
}
