import { Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}
  async create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownerRepository.create(createOwnerInput);
    return await this.ownerRepository.save(newOwner);
  }

  async findAll() {
    return await this.ownerRepository.find();
  }

  async findOne(id: number) {
    return await this.ownerRepository.findOneOrFail({
      where: {
        id,
      },
    });
  }
}
