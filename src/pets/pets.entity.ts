import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';
import { Owner } from 'src/owner/entities/owner.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Pets {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
  @Column()
  @IsAlpha()
  @Field()
  name: string;
  @Column({ nullable: true })
  @IsAlpha()
  @Field({ nullable: true })
  type?: string;

  @Column()
  @Field((type) => Int)
  ownerId: number;
  @ManyToOne(() => Owner, (owner) => owner.pets)
  @Field((type) => Owner)
  owner: Owner;
}
