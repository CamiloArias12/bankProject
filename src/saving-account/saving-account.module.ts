import { Module } from '@nestjs/common';
import { SavingAccountService } from './saving-account.service';
import { SavingAccountResolver } from './saving-account.resolver';

@Module({
  providers: [SavingAccountResolver, SavingAccountService],
})
export class SavingAccountModule {}
