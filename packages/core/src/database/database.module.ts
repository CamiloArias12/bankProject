import { DynamicModule, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { BranchOffice } from "src/branch-office/entities/branch-office.entity";
import { Cdt } from "src/cdt/entities/cdt.entity";
import { SavingAccount } from "src/saving-account/entities/saving-account.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
import { Credit } from "src/credit/credit.entity";
import { Client } from "src/user/client/client.entity";
import { Employee } from "src/user/employee/employee.entity";
import { User } from "src/user/user.entity";
import { Installment } from "src/credit/installments/installment.entity";
import { ViewCredit } from "src/credit/credit-view.entity";
import { ViewCdt } from "src/cdt/cdt-view.entity";
import { ViewSaving } from "src/saving-account/saving-view.entity";
import { PaymentAccount } from "src/payment/entities/payment-account.entity";
import { PaymentCdt } from "src/payment/entities/payment-cdt.entity";
import { PaymentCredit } from "src/payment/entities/payment-credit.entity";

@Module({
  imports: [],
  providers: [],
})
export class DatabaseModule {
  constructor() {}
  static async forRootAsync(): Promise<DynamicModule> {
    return TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get("DB_HOST"),
        port: configService.get("DB_PORT"),
        username: configService.get("DB_USERNAME"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB_DATABASE"),
          entities: [BranchOffice, Cdt, SavingAccount, Credit, Transaction, Client,Employee,User,Installment,ViewCredit ,ViewCdt,ViewSaving,PaymentAccount,PaymentCdt,PaymentCredit],
        synchronize: true,
      }),
      inject: [ConfigService],
    });
  }
}
