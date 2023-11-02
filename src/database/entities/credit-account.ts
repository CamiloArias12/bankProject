import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreditAccount{
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: Add credit account attributes.
}
