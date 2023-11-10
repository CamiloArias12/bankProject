import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Cdt } from "src/cdt/entities/cdt.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class PaymentCdt {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ defaultValue: "Cdt" })
  type: string;

  @Field()
  @Column()
  value: number;

  @Field()
  @Column("date")
  date: Date;

  @Field(() => Cdt)
  @ManyToOne(() => Cdt, (cdt) => cdt.payments, { nullable: false })
  cdt: Cdt;
}
