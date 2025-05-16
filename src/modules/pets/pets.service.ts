import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { PrismaService } from '../prisma/prisma.service';

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
        has_spotlight: data.has_spotlight,
        traits: {
          connect: data.trait_ids.map((id) => ({
            id: BigInt(id),
          })),
        },
      },
    });
  }
}
