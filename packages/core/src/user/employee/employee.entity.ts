import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "../user.entity";

@ObjectType()
@Entity()
export class Employee {
  @PrimaryColumn()
  idEmployee: number;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.employee, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({ name: "idEmployee" })
  user: User;
}
