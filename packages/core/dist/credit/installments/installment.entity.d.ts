import { IInstallment } from "./dto/installment-interface";
import { Credit } from "../credit.entity";
import { StateInstallment } from "./dto/enum-types";
import { PaymentCredit } from "src/payment/entities/payment-credit.entity";
export declare class Installment implements IInstallment {
    installmentNumber: number;
    id_credit: number;
    paymentDate: Date;
    initialBalance: number;
    scheduledPayment: number;
    extraPayment: number;
    totalPayment: number;
    capital: number;
    interest: number;
    finalBalance: number;
    state: StateInstallment;
    credit: Credit;
    payments: PaymentCredit[];
}
