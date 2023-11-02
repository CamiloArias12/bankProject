import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateAdminInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  jobId: string;

  @Field()
  jobEmail: string;

  @Field()
  password: string;

}
