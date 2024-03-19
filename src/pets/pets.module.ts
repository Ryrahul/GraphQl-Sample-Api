import { Module } from '@nestjs/common';
import { PetsResolver } from './pets.resolver';
import { PetsService } from './pets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pets } from './pets.entity';
import { OwnerModule } from 'src/owner/owner.module';

@Module({
  imports: [TypeOrmModule.forFeature([Pets]), OwnerModule],
  providers: [PetsResolver, PetsService],
})
export class PetsModule {}
