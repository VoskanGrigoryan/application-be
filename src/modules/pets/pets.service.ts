// src/pets/pets.service.ts
import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePetDto) {
    return this.prisma.pet.create({
      data: {
        name: data.name,
        birth_date: new Date(data.birth_date),
        gender: data.gender,
        person_id: BigInt(data.person_id),
        description: data.description,
        trait_id: BigInt(data.trait_id),
        has_spotlight: data.has_spotlight,
      },
    });
  }
}
