import { ObjectType, Field } from "@nestjs/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  Column,
  ManyToOne,
} from "typeorm";
import { Installment } from "./installments/installment.entity";
import { ICredit } from "./dto/credit-interface";
import { StateCredit } from "./dto/enum-types";
import { Client } from "src/user/client/client.entity";

@ObjectType()
@Entity()
export class Credit implements ICredit {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("double", { nullable: false })
  creditValue: number;

  @Field()
  @Column("double", { nullable: false })
  interest: number;

  @Field()
  @Column("date")
  startDate: Date;

  @Field()
  @Column({
    type: "enum",
    enum: StateCredit,
    nullable: false,
    default: StateCredit.APROBADO,
  })
  state: string;

  @Field(() => Client)
  @ManyToOne(() => Client, (client) => client.credits, {
    nullable: false,
    onUpdate: "CASCADE",
  })
  client: Client;

  @Field(() => [Installment])
  @OneToMany(() => Installment, (installment) => installment.credit, {
    nullable: false,
    cascade: ["insert", "update", "remove"],
  })
  installments: Installment[];

  constructor(params?: ICredit) {
    Object.assign(this, params);
  }
}
