import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BranchOffice {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
