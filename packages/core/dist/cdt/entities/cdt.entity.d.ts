import { PaymentCdt } from "src/payment/entities/payment-cdt.entity";
import { Client } from "src/user/client/client.entity";
export declare class Cdt {
    id: number;
    depositAmount: number;
    startDate: Date;
    maturityDate: Date;
    interestRate: number;
    client: Client;
    payments: PaymentCdt[];
}
