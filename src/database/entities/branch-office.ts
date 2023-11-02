import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BranchOffice{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phoneNumber: string;
}