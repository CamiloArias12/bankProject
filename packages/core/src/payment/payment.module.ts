import { Module } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { PaymentResolver } from "./payment.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PaymentCredit } from "./entities/payment-credit.entity";
import { PaymentCdt } from "./entities/payment-cdt.entity";
import { PaymentAccount } from "./entities/payment-account.entity";
import { CreditModule } from "src/credit/credit.module";
import { CdtModule } from "src/cdt/cdt.module";
import { SavingAccountModule } from "src/saving-account/saving-account.module";

@Module({
  providers: [PaymentResolver, PaymentService],
  imports: [
    TypeOrmModule.forFeature([PaymentCredit, PaymentCdt, PaymentAccount]),
    CreditModule,
    CdtModule,
    SavingAccountModule,
  ],
})
export class PaymentModule {}
