import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { PaymentService } from "./payment.service";
import { CreatePaymentInput } from "./dto/create-payment.input";
import { PaymentCredit } from "./entities/payment-credit.entity";
import { PaymentCdt } from "./entities/payment-cdt.entity";
import { PaymentAccount } from "./entities/payment-account.entity";

@Resolver(() => PaymentCredit)
export class PaymentResolver {
  constructor(private readonly paymentService: PaymentService) {}

  @Mutation(() => Boolean)
  async createPaymentCredit(
    @Args("createPaymentInput") createPaymentInput: CreatePaymentInput,
  ) {
    return this.paymentService.createPaymentCredit(createPaymentInput);
  }
  @Mutation(() => Boolean)
  async createPaymentCdt(
    @Args("createPaymentInput") createPaymentInput: CreatePaymentInput,
  ) {
    return this.paymentService.createPaymentCdt(createPaymentInput);
  }

  @Mutation(() => Boolean)
  async createPaymentAccount(
    @Args("createPaymentInput") createPaymentInput: CreatePaymentInput,
  ) {
    return this.paymentService.createPaymentAccount(createPaymentInput);
  }
  @Query(() => [PaymentCredit])
  async findAllPaymentCredit() {
    return await this.paymentService.findAllPaymentCredit();
  }

  @Query(() => [PaymentCdt])
  async findAllPaymentCdt() {
    return await this.paymentService.findAllPaymentCredit();
  }

  @Query(() => [PaymentAccount])
  async findAllPaymentAccount() {
    return await this.paymentService.findAllPaymentAccount();
  }
}
