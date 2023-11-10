import { Field, ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import {
  CivilStatus,
  Gender,
  HousingType,
  Studies,
  TypeIdentification,
} from "./dto/enum-type";
import { Client } from "./client/client.entity";
import { Employee } from "./employee/employee.entity";
import { BranchOffice } from "src/branch-office/entities/branch-office.entity";
import { IUser } from "./dto/user.interface";

@ObjectType()
@Entity()
export class User implements IUser {
  @Field()
  @PrimaryColumn()
  identification: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  phone: string;

  @Field()
  @Column()
  idBranch: number;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;

  @Field(() => Client, { nullable: true })
  @OneToOne(() => Client, (client) => client.user)
  client: Client;

  @Field(() => Employee, { nullable: true })
  @OneToOne(() => Employee, (employee) => employee.user)
  employee: Employee;

  @Field(() => BranchOffice, { nullable: true })
  @ManyToOne(() => BranchOffice, (branch) => branch.users, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "idBranch" })
  branch: BranchOffice;

  constructor(params?: IUser) {
    Object.assign(this, params);
  }
}
