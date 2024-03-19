import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pets } from './pets.entity';
import { CreatePetInput } from './dto/CreatePetDto';

@Resolver()
export class PetsResolver {
  constructor(private readonly petService: PetsService) {}
  @Query((returns) => [Pets])
  async pets(): Promise<Pets[]> {
    return await this.petService.findAllPets();
  }
  @Query((returns) => Pets)
  async getOnePet(@Args('id', { type: () => Int }) id: number) {
    return this.petService.findOnePet(id);
  }
  @Mutation((returns) => Pets)
  async createPets(@Args('createPetInput') dto: CreatePetInput): Promise<Pets> {
    return await this.petService.createPets(dto);
  }
}
