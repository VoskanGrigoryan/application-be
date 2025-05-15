import { Module } from '@nestjs/common';
import { PetsModule } from './modules/pets/pets.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule, PetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
