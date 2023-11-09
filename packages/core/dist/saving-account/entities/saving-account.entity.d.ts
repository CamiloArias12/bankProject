import { PaymentAccount } from "src/payment/entities/payment-account.entity";
import { Client } from "src/user/client/client.entity";
export declare class SavingAccount {
    id: number;
    openingDate: Date;
    interestRate: number;
    client: Client;
    payments: PaymentAccount[];
}
