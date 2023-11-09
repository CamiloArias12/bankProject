import { Installment } from 'src/credit/installments/installment.entity';
export declare class PaymentCredit {
    id: number;
    type: string;
    value: number;
    date: Date;
    installment: Installment;
}
