import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateCdtInput {

  @Field()
  startDate:Date

  @Field()
  depositAmount: number;

  @Field()
  maturityDate: Date;

  @Field()
  interestRate: number;


  @Field()
  clientId:number
  
}
