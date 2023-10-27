import { CreateBranchOfficeInput } from './create-branch-office.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBranchOfficeInput extends PartialType(CreateBranchOfficeInput) {
  @Field(() => Int)
  id: number;
}
