import { ObjectType, Field, Int } from "@nestjs/graphql";
import { PaymentAccount } from "src/payment/entities/payment-account.entity";
import { Client } from "src/user/client/client.entity";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";

@ObjectType()
@Entity()
export class SavingAccount {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  openingDate: Date;

  @Field()
  @Column("decimal", { precision: 5, scale: 2 })
  interestRate: number;

  @Field(() => Client)
  @ManyToOne(() => Client, (client) => client.saving_accounts, {
    nullable: false,
  })
  client: Client;

  @Field(() => [PaymentAccount])
  @OneToMany(() => PaymentAccount, (payment) => payment.saving_accounts, {
    nullable: false,
  })
  payments: PaymentAccount[];
}
