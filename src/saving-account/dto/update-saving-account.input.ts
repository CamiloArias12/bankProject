import { CreateSavingAccountInput } from './create-saving-account.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSavingAccountInput extends PartialType(CreateSavingAccountInput) {
  @Field(() => Int)
  id: number;
}
