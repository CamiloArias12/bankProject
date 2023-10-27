import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Cdt {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
