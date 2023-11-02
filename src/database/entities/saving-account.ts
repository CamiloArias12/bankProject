import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SavingAccount{
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: Add saving account attributes.
}
