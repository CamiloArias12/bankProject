import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Transaction {
  @Field(() => Int, { description: "Example field (placeholder)" })
  exampleField: number;

  @PrimaryGeneratedColumn()
  id: number;
}
