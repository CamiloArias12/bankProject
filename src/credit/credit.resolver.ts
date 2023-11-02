import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CreditService } from "./credit.service";
import { Credit } from "./entities/credit.entity";
import { CreateCreditInput } from "./dto/create-credit.input";
import { UpdateCreditInput } from "./dto/update-credit.input";

@Resolver(() => Credit)
export class CreditResolver {
  constructor(private readonly creditService: CreditService) {}

  @Mutation(() => Credit)
  createCredit(
    @Args("createCreditInput") createCreditInput: CreateCreditInput,
  ) {
    return this.creditService.create(createCreditInput);
  }

  @Query(() => [Credit], { name: "credit" })
  findAll() {
    return this.creditService.findAll();
  }

  @Query(() => Credit, { name: "credit" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.creditService.findOne(id);
  }

  @Mutation(() => Credit)
  updateCredit(
    @Args("updateCreditInput") updateCreditInput: UpdateCreditInput,
  ) {
    return this.creditService.update(updateCreditInput.id, updateCreditInput);
  }

  @Mutation(() => Credit)
  removeCredit(@Args("id", { type: () => Int }) id: number) {
    return this.creditService.remove(id);
  }
}
