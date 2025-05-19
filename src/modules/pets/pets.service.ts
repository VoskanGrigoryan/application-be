import {
  Injectable,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { Prisma } from 'src/generated';
import { FilterPetsDto } from './dto/filter-pet.dto';
import { subYears, startOfDay, endOfDay } from 'date-fns';

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
          species: data.species,
          weight: data.weight,
          hair_type: data.hair_type,
          hair_color: data.hair_color,
          owner_id: data.owner_id,
          description: data.description,
          has_spotlight: data.has_spotlight,
          traits: {
            connect: data.trait_ids.map((id) => ({
              id,
            })),
          },
        },
      });

      return {
        message: 'Pet created successfully',
        pet: {
          ...newPet,
          id: newPet.id.toString(),
          owner_id: newPet.owner_id.toString(),
        },
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2003') {
          throw new BadRequestException(
            'Invalid foreign key reference (owner_id or trait_ids)',
          );
        }
      }

      if (error.code === 'P2025') {
        throw new BadRequestException(
          'One or more related records not found (owner or traits)',
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
        owner_id: pet.owner_id ? pet.owner_id.toString() : null,
      }));
    } catch (error) {
      console.error('Error fetching pets:', error);
      throw new InternalServerErrorException('Could not retrieve pets');
    }
  }

  async getPetById(id: string) {
    try {
      const pet = await this.prisma.pet.findUnique({
        where: { id: parseInt(id, 10) },
      });

      if (!pet) return null;

      return {
        ...pet,
        id: pet.id.toString(),
        owner_id: pet.owner_id ? pet.owner_id.toString() : null,
      };
    } catch (error) {
      console.error('Error fetching pet by id:', error);
      throw new InternalServerErrorException('Could not retrieve pet');
    }
  }

  async filterPetsByParams(filters: FilterPetsDto) {
    try {
      const where: any = {};

      if (filters.gender !== undefined) where.gender = filters.gender;
      if (filters.species) where.species = filters.species;
      if (filters.weight !== undefined) where.weight = filters.weight;
      if (filters.hairType) where.hair_type = filters.hairType;
      if (filters.hairColor) where.hair_color = filters.hairColor;

      // For province and city, join via related models
      if (filters.province) {
        where.owned_by = {
          city: {
            province_id: filters.province,
          },
        };
      }
      if (filters.city) {
        where.owned_by = where.owned_by || {};
        where.owned_by.city = { id: filters.city };
      }

      const pets = await this.prisma.pet.findMany({ where });
      return pets;
    } catch (error) {
      console.error('Error fetching pets', error);
      throw new InternalServerErrorException('Could not retrieve pets');
    }
  }
}
