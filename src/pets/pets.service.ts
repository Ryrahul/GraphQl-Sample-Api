import { Injectable } from '@nestjs/common';
import { Pets } from './pets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/CreatePetDto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets) private petRepository: Repository<Pets>,
  ) {}

  async createPets(dto: CreatePetInput): Promise<Pets> {
    const newPet = await this.petRepository.create(dto);
    return this.petRepository.save(newPet);
  }
  async findAllPets(): Promise<Pets[]> {
    return this.petRepository.find();
  }
  async findOnePet(id: number): Promise<Pets> {
    return this.petRepository.findOneOrFail({
      where: {
        id,
      },
    });
  }
}
