import { Installment } from './installments/installment.entity';
import { ICredit } from './dto/credit-interface';
import { Client } from 'src/user/client/client.entity';
export declare class Credit implements ICredit {
    id: number;
    creditValue: number;
    interest: number;
    startDate: Date;
    state: string;
    client: Client;
    installments: Installment[];
    constructor(params?: ICredit);
}
