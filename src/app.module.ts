import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AdminModule } from "./admin/admin.module";
import { TransactionModule } from "./transaction/transaction.module";
import { SavingAccountModule } from "./saving-account/saving-account.module";
import { CdtModule } from "./cdt/cdt.module";
import { CreditModule } from "./credit/credit.module";
import { ClientModule } from "./client/client.module";
import { BranchOfficeModule } from "./branch-office/branch-office.module";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import * as path from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.join(__dirname, "..", ".env"),
    }),
    AdminModule,
    BranchOfficeModule,
    ClientModule,
    CreditModule,
    CdtModule,
    SavingAccountModule,
    TransactionModule,
    DatabaseModule.forRootAsync(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
