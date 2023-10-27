import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TransactionModule } from './transaction/transaction.module';
import { SavingAccountModule } from './saving-account/saving-account.module';
import { CdtModule } from './cdt/cdt.module';
import { CreditModule } from './credit/credit.module';
import { ClientModule } from './client/client.module';
import { BranchOfficeModule } from './branch-office/branch-office.module';

@Module({
  imports: [AdminModule, BranchOfficeModule, ClientModule, CreditModule, CdtModule, SavingAccountModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
