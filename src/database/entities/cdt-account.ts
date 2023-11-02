import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CDTAccount{
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: Add cdt account attributes.
}
