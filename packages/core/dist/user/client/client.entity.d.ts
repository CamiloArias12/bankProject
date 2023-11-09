import { User } from "../user.entity";
import { Credit } from "src/credit/credit.entity";
import { Cdt } from "src/cdt/entities/cdt.entity";
export declare class Client {
    idClient: number;
    user: User;
    credits: Credit[];
    cdts: Cdt[];
    saving_accounts: Cdt[];
}
