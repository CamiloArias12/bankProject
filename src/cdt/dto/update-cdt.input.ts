import { CreateCdtInput } from "./create-cdt.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateCdtInput extends PartialType(CreateCdtInput) {
  @Field(() => Int)
  id: number;
}
