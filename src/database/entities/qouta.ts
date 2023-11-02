import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreditAccountQuota{
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: Add credit account quota attributes.
}
