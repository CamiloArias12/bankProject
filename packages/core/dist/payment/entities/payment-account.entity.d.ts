import { SavingAccount } from 'src/saving-account/entities/saving-account.entity';
export declare class PaymentAccount {
    id: number;
    type: string;
    value: number;
    date: Date;
    saving_accounts: SavingAccount;
}
