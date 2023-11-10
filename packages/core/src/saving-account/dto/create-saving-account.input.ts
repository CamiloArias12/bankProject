import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateSavingAccountInput {
  @Field()
  openingDate: Date;

  @Field()
  interestRate: number;

  @Field()
  clientId: number;
}
