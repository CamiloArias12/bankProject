import { ObjectType, Field, Int } from '@nestjs/graphql';
import { SavingAccount } from 'src/saving-account/entities/saving-account.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class PaymentAccount {

   @Field()
   @PrimaryGeneratedColumn()
   id:number

   @Field({defaultValue:"Cuenta de ahorro"})
   type:string

   @Field()
   @Column()
   value:number

   @Field()
   @Column('date')
   date:Date


  @Field(() =>SavingAccount)
  @ManyToOne(() => SavingAccount, saving=> saving.payments,{nullable:false})
  saving_accounts: SavingAccount;
   
}
