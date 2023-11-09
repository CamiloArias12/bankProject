import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePaymentInput {

   @Field({nullable:true})
   value:number
   
   @Field()
   id:number
   
   @Field({nullable:true})
   credit:number
}
