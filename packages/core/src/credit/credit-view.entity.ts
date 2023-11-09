import { DataSource, ViewColumn, ViewEntity } from "typeorm";
import { Credit } from "./credit.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/user.entity";
import { Client } from "src/user/client/client.entity";


@ViewEntity({
   expression:(dataSource:DataSource) => 
      dataSource
	 .createQueryBuilder()
	 .select("user.identification","identification")
	 .addSelect("user.name","name")
	 .addSelect("user.lastName","lastName")
	 .addSelect("credit.id","id")
	 .addSelect("credit.startDate","startDate")
	 .addSelect("credit.creditValue","creditValue")
	 .addSelect("credit.interest","interest")
	 .addSelect("credit.state","state")
	 .from(Credit,"credit")
         .leftJoin(Client, "client", "credit.clientIdClient= client.idClient")
         .leftJoin(User, "user", "client.idClient= user.identification")

	 }
	 

	   )

@ObjectType()
export class ViewCredit { 

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
   creditValue:number
   
   @Field()
   @ViewColumn()
   interest:number
 
 

   @Field()
   @ViewColumn()
   state:string

   @Field()
   @ViewColumn()
   startDate:Date


}
