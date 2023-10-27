import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCdtInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
