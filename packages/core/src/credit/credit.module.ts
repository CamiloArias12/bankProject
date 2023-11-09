import { Module } from '@nestjs/common';
import { CreditService } from './credit.service';
import { CreditResolver } from './credit.resolver';
import { InstallmentsService } from './installments/installments.service';
import { InstallmentResolver } from './installments/installments.resolver';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Credit } from './credit.entity';
import { Installment } from './installments/installment.entity';

@Module({
  providers: [CreditResolver, CreditService, InstallmentsService,InstallmentResolver],
  imports: [TypeOrmModule.forFeature([Credit,Installment]), UserModule],  
  exports:[InstallmentsService,CreditService]
})
export class CreditModule {}


