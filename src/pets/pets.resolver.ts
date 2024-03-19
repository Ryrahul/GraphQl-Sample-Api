import { Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pets } from './pets.entity';

@Resolver()
export class PetsResolver {
  constructor(private readonly petService: PetsService) {}
  @Query((returns) => [Pets])
  async pets(): Promise<Pets[]> {
    return await this.petService.findAllPets();
  }
}
