import { DynamicModule, Module } from "@nestjs/common";
import { DatabaseService } from "./database.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Client } from "./entities/client";
import { BranchOffice } from "./entities/branch-office";
import { Admin } from "./entities/admin";
import { CreditAccount } from "./entities/credit-account";
import { CreditAccountQuota } from "./entities/qouta";
import { CDTAccount } from "./entities/cdt-account";
import { SavingAccount } from "src/saving-account/entities/saving-account.entity";
import { Transaction } from "./entities/transaction";

@Module({
  imports: [],
  providers: [DatabaseService],
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
          entities: [BranchOffice, Admin, Client, CreditAccount, CreditAccountQuota, CDTAccount, SavingAccount, Transaction],
        synchronize: true,
      }),
      inject: [ConfigService],
    });
  }
}
