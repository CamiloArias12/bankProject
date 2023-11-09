import { DataSource, ViewColumn, ViewEntity } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/user.entity";
import { Client } from "src/user/client/client.entity";
import { SavingAccount } from "./entities/saving-account.entity";


@ViewEntity({
   expression:(dataSource:DataSource) => 
      dataSource
	 .createQueryBuilder()
	 .select("user.identification","identification")
	 .addSelect("user.name","name")
	 .addSelect("user.lastName","lastName")
	 .addSelect("saving.id","id")
	 .addSelect("saving.openingDate","openingDate")
	 .addSelect("saving.interestRate","interestRate")
	 .from(SavingAccount,"saving")
         .leftJoin(Client, "client", "saving.clientIdClient= client.idClient")
         .leftJoin(User, "user", "client.idClient= user.identification")

	 }
	 

	   )

@ObjectType()
export class ViewSaving{ 

   @Field()
   @ViewColumn()
   id:number

   @Field()
   @ViewColumn()
   identification:number
   
   @Field()
   @ViewColumn()
   lastName:string

   @Field()
   @ViewColumn()
   name:string
   
   @Field()
   @ViewColumn()
   interestRate:number
  
   @Field()
   @ViewColumn()
   openingDate:Date



}
