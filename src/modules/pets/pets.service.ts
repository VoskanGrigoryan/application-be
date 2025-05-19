// src/pets/pets.service.ts
import {
  Injectable,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { Prisma } from 'src/generated';

@Injectable()
export class PetsService {
  constructor(private prisma: PrismaService) {}

  async createPet(data: CreatePetDto) {
    try {
      const newPet = await this.prisma.pet.create({
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

      return {
        message: 'Pet created successfully',
        pet: {
          ...newPet,
          id: newPet.id.toString(),
          person_id: newPet.person_id.toString(),
        },
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2003') {
          throw new BadRequestException(
            'Invalid foreign key reference (person_id or trait_ids)',
          );
        }
      }

      if (error.code === 'P2025') {
        throw new BadRequestException(
          'One or more related records not found (person or traits)',
        );
      }

      console.error('Error creating pet:', error);
      throw new InternalServerErrorException('Failed to create pet');
    }
  }

  async getAllPets() {
    try {
      const pets = await this.prisma.pet.findMany();

      return pets.map((pet) => ({
        ...pet,
        id: pet.id.toString(),
        person_id: pet.person_id ? pet.person_id.toString() : null,
      }));
    } catch (error) {
      console.error('Error fetching pets:', error);
      throw new InternalServerErrorException('Could not retrieve pets');
    }
  }

  async getPetById(id: string) {
    try {
      const pet = await this.prisma.pet.findUnique({
        where: { id: BigInt(id) },
      });

      if (!pet) return null;

      return {
        ...pet,
        id: pet.id.toString(),
        person_id: pet.person_id ? pet.person_id.toString() : null,
      };
    } catch (error) {
      console.error('Error fetching pet by id:', error);
      throw new InternalServerErrorException('Could not retrieve pets');
    }
  }
}
