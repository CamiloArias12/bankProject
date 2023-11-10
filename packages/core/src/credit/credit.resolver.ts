import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CreditService } from "./credit.service";
import { CreateCreditInput } from "./dto/create-credit.input";
import { Credit } from "./credit.entity";
import { CreateInstallment } from "./installments/dto/create-installment.input";
import { ChangeAmortization } from "./installments/dto/types";
import { ViewCredit } from "./credit-view.entity";

@Resolver(() => Credit)
export class CreditResolver {
  constructor(private readonly creditService: CreditService) {}

  @Mutation(() => Credit)
  async createCredit(
    @Args("createCreditInput") createCreditInput: CreateCreditInput,
  ): Promise<Credit> {
    return await this.creditService.create(createCreditInput);
  }

  @Query(() => Credit)
  async findOneCredit(@Args("id", { type: () => Int }) id: number) {
    return this.creditService.findOne(id);
  }

  @Mutation(() => Boolean)
  async isRefinance(@Args("id", { type: () => Int }) id: number) {
    return this.creditService.isRefinance(id);
  }

  @Mutation(() => Boolean)
  async deleteCredit(@Args("id", { type: () => Int }) id: number) {
    return this.creditService.delete(id);
  }

  @Mutation(() => [CreateInstallment])
  async amortizationTableGenerate(
    @Args("Date", { type: () => Date }) date: Date,
    @Args("creditValue") creditValue: number,
    @Args("interest") interest: number,
    @Args("installments", { type: () => Int }) installments: number,
  ): Promise<CreateInstallment[]> {
    return await this.creditService.amortizationTableGenerate(
      date,
      creditValue,
      interest,
      installments,
    );
  }

  @Query(() => [ViewCredit])
  async findAllCredit(): Promise<ViewCredit[]> {
    return await this.creditService.findAll();
  }
  @Query(() => [ViewCredit])
  async findAllCreditByClient(
    @Args("identification") identification: number,
  ): Promise<ViewCredit[]> {
    return await this.creditService.findAllByClient(identification);
  }
}
