import { Repository } from "typeorm";
import { PaymentCdt } from "./entities/payment-cdt.entity";
import { PaymentCredit } from "./entities/payment-credit.entity";
import { PaymentAccount } from "./entities/payment-account.entity";
import { CreditService } from "src/credit/credit.service";
import { CdtService } from "src/cdt/cdt.service";
import { SavingAccountService } from "src/saving-account/saving-account.service";
import { CreatePaymentInput } from "./dto/create-payment.input";
import { InstallmentsService } from "src/credit/installments/installments.service";
export declare class PaymentService {
    private readonly paymentAccountRepository;
    private readonly paymentCreditRepository;
    private readonly paymentCdtRepository;
    private readonly creditService;
    private readonly cdtService;
    private readonly installmentService;
    private readonly savingAccountService;
    constructor(paymentAccountRepository: Repository<PaymentAccount>, paymentCreditRepository: Repository<PaymentCredit>, paymentCdtRepository: Repository<PaymentCdt>, creditService: CreditService, cdtService: CdtService, installmentService: InstallmentsService, savingAccountService: SavingAccountService);
    createPaymentCdt(data: CreatePaymentInput): Promise<Boolean>;
    createPaymentCredit(data: CreatePaymentInput): Promise<Boolean>;
    createPaymentAccount(data: CreatePaymentInput): Promise<Boolean>;
    findAllPaymentCdt(): Promise<any>;
    findAllPaymentCredit(): Promise<any>;
    findAllPaymentAccount(): Promise<any>;
}
