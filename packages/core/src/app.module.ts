import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TransactionModule } from "./transaction/transaction.module";
import { SavingAccountModule } from "./saving-account/saving-account.module";
import { CdtModule } from "./cdt/cdt.module";
import { CreditModule } from "./credit/credit.module";
import { BranchOfficeModule } from "./branch-office/branch-office.module";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import * as path from "path";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";
import { UserModule } from "./user/user.module";
import { DateScalar } from "./scalar-type";
import { PaymentModule } from "./payment/payment.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: path.join(__dirname, "..", "..", "..", ".env"),
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UserModule,
    BranchOfficeModule,
    CreditModule,
    CdtModule,
    SavingAccountModule,
    TransactionModule,
    DatabaseModule.forRootAsync(),
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar],
})
export class AppModule {}
