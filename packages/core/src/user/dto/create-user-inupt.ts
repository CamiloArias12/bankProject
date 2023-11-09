import { InputType, Int, Field } from "@nestjs/graphql";
import { IUser } from "./user.interface";

@InputType()
export class CreateUserInput implements IUser {

   @Field()
   identification: number; 
   
   @Field()
   name:string

   @Field()
   lastName:string

   @Field()
   phone: string

   @Field()
   email: string

   @Field()
   password:string
   
   @Field()
   idBranch:number 


}
