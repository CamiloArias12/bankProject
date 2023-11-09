import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import { User } from "../user.entity";
import { Credit } from "src/credit/credit.entity";
import { Cdt } from "src/cdt/entities/cdt.entity";
import { SavingAccount } from "src/saving-account/entities/saving-account.entity";


@ObjectType()
@Entity()
export class Client {
   
   @PrimaryColumn()
   idClient:number

   @Field(()=> User)
   @OneToOne(() => User, user => user.client,{ cascade:true,onDelete:'CASCADE',onUpdate:'CASCADE'})
   @JoinColumn({ name: 'idClient' })
   user: User


   @Field(() => [Credit])
   @OneToMany(() => Credit, credit => credit.client)
   credits: Credit[];
   
   @Field(() => [Cdt])
   @OneToMany(() => Cdt, cdt=> cdt.client)
   cdts: Cdt[];

   @Field(() => [SavingAccount])
   @OneToMany(() => SavingAccount, saving_account=> saving_account.client)
   saving_accounts: Cdt[];
}

