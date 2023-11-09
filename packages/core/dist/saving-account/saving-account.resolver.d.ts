import { SavingAccountService } from "./saving-account.service";
import { CreateSavingAccountInput } from "./dto/create-saving-account.input";
import { UpdateSavingAccountInput } from "./dto/update-saving-account.input";
import { ViewSaving } from "./saving-view.entity";
export declare class SavingAccountResolver {
    private readonly savingAccountService;
    constructor(savingAccountService: SavingAccountService);
    createSavingAccount(createSavingAccountInput: CreateSavingAccountInput): Promise<any>;
    findAllSavingAccount(): Promise<ViewSaving[]>;
    findOne(id: number): Promise<any>;
    updateSavingAccount(updateSavingAccountInput: UpdateSavingAccountInput): string;
    findAllSavingAccountByClient(identification: number): Promise<ViewSaving[]>;
    removeSavingAccount(id: number): Promise<Boolean>;
}
