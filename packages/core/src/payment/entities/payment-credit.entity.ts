import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Installment } from 'src/credit/installments/installment.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class PaymentCredit {

   @Field()
   @PrimaryGeneratedColumn()
   id:number
  
   @Field({defaultValue:"Credit"})
   type:string

   @Field()
   @Column()
   value:number

   @Field()
   @Column('date')
   date:Date

   @Field(() =>Installment)
   @ManyToOne(() =>  Installment, installment => installment.payments,{nullable:false})
   installment: Installment;
   
}
