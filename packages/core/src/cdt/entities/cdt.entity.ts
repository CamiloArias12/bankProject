import { ObjectType, Field, Int } from "@nestjs/graphql";
import { PaymentCdt } from "src/payment/entities/payment-cdt.entity";
import { Client } from "src/user/client/client.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Cdt {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("decimal", { precision: 10, scale: 2 })
  depositAmount: number;

  @Field()
  @Column("date")
  startDate: Date;

  @Field()
  @Column("date")
  maturityDate: Date;

  @Field()
  @Column("decimal", { precision: 5, scale: 2 })
  interestRate: number;

  @Field(() => Client)
  @ManyToOne(() => Client, (client) => client.cdts, {
    onUpdate: "CASCADE",
    nullable: false,
  })
  client: Client;

  @Field(() => [PaymentCdt])
  @OneToMany(() => PaymentCdt, (payment) => payment.cdt, { nullable: false })
  payments: PaymentCdt[];
}
