import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
