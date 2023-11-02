import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateSavingAccountInput {
  @Field(() => Int, { description: "Example field (placeholder)" })
  exampleField: number;
}
