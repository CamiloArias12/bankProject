import { Module } from "@nestjs/common";
import { SavingAccountService } from "./saving-account.service";
import { SavingAccountResolver } from "./saving-account.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SavingAccount } from "./entities/saving-account.entity";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([SavingAccount]), UserModule],
  providers: [SavingAccountResolver, SavingAccountService],
  exports: [SavingAccountService],
})
export class SavingAccountModule {}
