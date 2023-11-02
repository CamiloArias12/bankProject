import { DynamicModule, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Admin } from "src/admin/entities/admin.entity";
import { BranchOffice } from "src/branch-office/entities/branch-office.entity";
import { Cdt } from "src/cdt/entities/cdt.entity";
import { SavingAccount } from "src/saving-account/entities/saving-account.entity";
import { Credit } from "src/credit/entities/credit.entity";
import { Transaction } from "src/transaction/entities/transaction.entity";
import { Client } from "src/client/entities/client.entity";

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
          entities: [Admin, BranchOffice, Cdt, SavingAccount, Credit, Transaction, Client ],
        synchronize: true,
      }),
      inject: [ConfigService],
    });
  }
}
