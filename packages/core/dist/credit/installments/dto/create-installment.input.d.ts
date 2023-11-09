import { IInstallment } from './installment-interface';
export declare class CreateInstallment implements IInstallment {
    installmentNumber: number;
    paymentDate: Date;
    initialBalance: number;
    scheduledPayment: number;
    extraPayment: number;
    totalPayment: number;
    capital: number;
    interest: number;
    finalBalance: number;
    isPay?: boolean;
}
