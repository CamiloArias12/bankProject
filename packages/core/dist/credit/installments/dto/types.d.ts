import { CreateInstallment } from "./create-installment.input";
export declare class ChangeAmortization {
    tableAmortization: CreateInstallment[];
}
export declare class InstallmentPayment {
    installmentNumber: number;
    credit: number;
    paymentDate: Date;
    scheduledPayment: number;
    interest: number;
    finalBalance: number;
    identification: number;
    name: string;
    lastName: string;
    typeCredit: string;
    extraPayment: number;
    totalPayment: number;
    capital: number;
    interestPayment: number;
    idTypeCredit: number;
    isSelected: boolean;
}
