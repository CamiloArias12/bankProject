import { ICredit } from './credit-interface';
import { CreateInstallment } from '../installments/dto/create-installment.input';
export declare class CreateCreditInput implements ICredit {
    creditValue: number;
    interest: number;
    startDate: Date;
    clientId: number;
    installments: CreateInstallment[];
}
