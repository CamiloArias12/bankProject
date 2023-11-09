import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateBranchOfficeInput {

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  phoneNumber: string;
 
}
