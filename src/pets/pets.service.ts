import { Injectable } from '@nestjs/common';
import { Pets } from './pets.entity';

@Injectable()
export class PetsService {
  async findAllPets(): Promise<Pets[]> {
    const pet = new Pets();
    pet.name = 'cats';
    pet.id = 1;
    return [pet];
  }
}
