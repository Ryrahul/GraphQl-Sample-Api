import { Injectable } from '@nestjs/common';
import { Pets } from './pets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pets) private petRepository: Repository<Pets>,
  ) {}
  async findAllPets(): Promise<Pets[]> {
    return this.petRepository.find();
  }
}
