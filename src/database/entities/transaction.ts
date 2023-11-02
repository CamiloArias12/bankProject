import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction{
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: Add transaction attributes.
}
