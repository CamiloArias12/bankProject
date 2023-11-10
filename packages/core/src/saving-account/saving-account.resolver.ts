import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { SavingAccountService } from "./saving-account.service";
import { CreateSavingAccountInput } from "./dto/create-saving-account.input";
import { UpdateSavingAccountInput } from "./dto/update-saving-account.input";
import { SavingAccount } from "./entities/saving-account.entity";
import { DataSource } from "typeorm";
import { ViewSaving } from "./saving-view.entity";

@Resolver(() => SavingAccount)
export class SavingAccountResolver {
  constructor(private readonly savingAccountService: SavingAccountService) {}

  @Mutation(() => SavingAccount)
  async createSavingAccount(
    @Args("createSavingAccountInput")
    createSavingAccountInput: CreateSavingAccountInput,
  ) {
    return await this.savingAccountService.create(createSavingAccountInput);
  }

  @Query(() => [ViewSaving])
  findAllSavingAccount() {
    return this.savingAccountService.findAll();
  }

  @Query(() => SavingAccount, { name: "savingAccount" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.savingAccountService.findOne(id);
  }

  @Mutation(() => SavingAccount)
  updateSavingAccount(
    @Args("updateSavingAccountInput")
    updateSavingAccountInput: UpdateSavingAccountInput,
  ) {
    return this.savingAccountService.update(
      updateSavingAccountInput.id,
      updateSavingAccountInput,
    );
  }
  @Query(() => [ViewSaving])
  async findAllSavingAccountByClient(
    @Args("identification") identification: number,
  ): Promise<ViewSaving[]> {
    return await this.savingAccountService.findAllByClient(identification);
  }
  @Mutation(() => SavingAccount)
  removeSavingAccount(@Args("id", { type: () => Int }) id: number) {
    return this.savingAccountService.delete(id);
  }
}
