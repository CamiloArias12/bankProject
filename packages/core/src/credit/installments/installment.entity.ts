import { Field, ObjectType } from "@nestjs/graphql";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { IInstallment } from "./dto/installment-interface";
import { Credit } from "../credit.entity";
import { StateInstallment } from "./dto/enum-types";
import { PaymentCredit } from "src/payment/entities/payment-credit.entity";

@ObjectType()
@Entity()
export class Installment implements IInstallment {
  @Field()
  @PrimaryColumn()
  installmentNumber: number;

  @Field()
  @PrimaryColumn()
  id_credit: number;

  @Field(() => Date)
  @Column("date")
  paymentDate: Date;

  @Field()
  @Column()
  initialBalance: number;

  @Field()
  @Column()
  scheduledPayment: number;

  @Field()
  @Column()
  extraPayment: number;

  @Field()
  @Column()
  totalPayment: number;

  @Field()
  @Column()
  capital: number;

  @Field()
  @Column()
  interest: number;

  @Field()
  @Column()
  finalBalance: number;

  @Field()
  @Column({
    type: "enum",
    enum: StateInstallment,
    nullable: false,
    default: StateInstallment.PENDIENTE,
  })
  state: StateInstallment;

  @Field(() => Credit)
  @ManyToOne(() => Credit, (credit) => credit.installments, {
    nullable: false,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "id_credit" })
  credit: Credit;

  @Field(() => [PaymentCredit])
  @OneToMany(() => PaymentCredit, (payment) => payment.installment, {
    nullable: false,
  })
  payments: PaymentCredit[];
}
