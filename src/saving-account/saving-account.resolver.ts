import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SavingAccountService } from './saving-account.service';
import { SavingAccount } from './entities/saving-account.entity';
import { CreateSavingAccountInput } from './dto/create-saving-account.input';
import { UpdateSavingAccountInput } from './dto/update-saving-account.input';

@Resolver(() => SavingAccount)
export class SavingAccountResolver {
  constructor(private readonly savingAccountService: SavingAccountService) {}

  @Mutation(() => SavingAccount)
  createSavingAccount(@Args('createSavingAccountInput') createSavingAccountInput: CreateSavingAccountInput) {
    return this.savingAccountService.create(createSavingAccountInput);
  }

  @Query(() => [SavingAccount], { name: 'savingAccount' })
  findAll() {
    return this.savingAccountService.findAll();
  }

  @Query(() => SavingAccount, { name: 'savingAccount' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.savingAccountService.findOne(id);
  }

  @Mutation(() => SavingAccount)
  updateSavingAccount(@Args('updateSavingAccountInput') updateSavingAccountInput: UpdateSavingAccountInput) {
    return this.savingAccountService.update(updateSavingAccountInput.id, updateSavingAccountInput);
  }

  @Mutation(() => SavingAccount)
  removeSavingAccount(@Args('id', { type: () => Int }) id: number) {
    return this.savingAccountService.remove(id);
  }
}
