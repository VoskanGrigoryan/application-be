import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [PrismaService, PetsService],
  controllers: [PetsController]
})

export class PetsModule {}
