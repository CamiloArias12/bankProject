import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { ClientService } from "src/user/client/client.service";
import { InjectRepository } from "@nestjs/typeorm";
import { PaymentCdt } from "./entities/payment-cdt.entity";
import { PaymentCredit } from "./entities/payment-credit.entity";
import { PaymentAccount } from "./entities/payment-account.entity";
import { CreditService } from "src/credit/credit.service";
import { CdtService } from "src/cdt/cdt.service";
import { SavingAccountService } from "src/saving-account/saving-account.service";
import { CreatePaymentInput } from "./dto/create-payment.input";
import { InstallmentsService } from "src/credit/installments/installments.service";
import { StateCredit } from "src/credit/dto/enum-types";
import { StateInstallment } from "src/credit/installments/dto/enum-types";

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentAccount)
    private readonly paymentAccountRepository: Repository<PaymentAccount>,
    @InjectRepository(PaymentCredit)
    private readonly paymentCreditRepository: Repository<PaymentCredit>,
    @InjectRepository(PaymentCdt)
    private readonly paymentCdtRepository: Repository<PaymentCdt>,
    private readonly creditService: CreditService,
    private readonly cdtService: CdtService,
    private readonly installmentService: InstallmentsService,
    private readonly savingAccountService: SavingAccountService,
  ) {}

  async createPaymentCdt(data: CreatePaymentInput): Promise<Boolean> {
    try {
      const cdt = await this.cdtService.findOne(data.id);

      const paymentCdt = new PaymentCdt();
      paymentCdt.value = data.value;
      paymentCdt.date = new Date();
      paymentCdt.cdt = cdt;
      await this.paymentCdtRepository.save(paymentCdt);
      return true;
    } catch (e) {
      return false;
    }
  }
  async createPaymentCredit(data: CreatePaymentInput): Promise<Boolean> {
    try {
      const installment =
        await this.installmentService.finOneByCreditAndNumberInstallment(
          data.id,
          data.credit,
        );
      const paymentCredit = new PaymentCredit();
      if (data.credit === 1) {
        await this.creditService.updateState(data.id, StateCredit.CURSO);
      }
      await this.installmentService.updateState(
        data.credit,
        data.id,
        StateInstallment.PAGADA,
      );
      paymentCredit.value = installment.totalPayment;
      paymentCredit.installment = installment;
      paymentCredit.date = new Date();
      await this.paymentCreditRepository.save(paymentCredit);
      return true;
    } catch (e) {
      return false;
    }
  }

  async createPaymentAccount(data: CreatePaymentInput): Promise<Boolean> {
    try {
      const savingAccount = await this.savingAccountService.findOne(data.id);
      const paymentAccount = new PaymentAccount();
      paymentAccount.value = data.value;
      paymentAccount.date = new Date();
      paymentAccount.saving_accounts = savingAccount;
      await this.paymentAccountRepository.save(paymentAccount);
      return true;
    } catch (e) {
      return false;
    }
  }

  async findAllPaymentCdt() {
    return await this.paymentCdtRepository.find();
  }
  async findAllPaymentCredit() {
    return await this.paymentCreditRepository.find();
  }
  async findAllPaymentAccount() {
    return await this.paymentAccountRepository.find();
  }
}
