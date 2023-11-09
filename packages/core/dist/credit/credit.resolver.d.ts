import { CreditService } from './credit.service';
import { CreateCreditInput } from './dto/create-credit.input';
import { Credit } from './credit.entity';
import { CreateInstallment } from './installments/dto/create-installment.input';
import { ViewCredit } from './credit-view.entity';
export declare class CreditResolver {
    private readonly creditService;
    constructor(creditService: CreditService);
    createCredit(createCreditInput: CreateCreditInput): Promise<Credit>;
    findOneCredit(id: number): Promise<Credit>;
    isRefinance(id: number): Promise<Boolean>;
    deleteCredit(id: number): Promise<Boolean>;
    amortizationTableGenerate(date: Date, creditValue: number, interest: number, installments: number): Promise<CreateInstallment[]>;
    findAllCredit(): Promise<ViewCredit[]>;
    findAllCreditByClient(identification: number): Promise<ViewCredit[]>;
}
