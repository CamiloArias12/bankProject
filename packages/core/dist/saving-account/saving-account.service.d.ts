import { CreateSavingAccountInput } from "./dto/create-saving-account.input";
import { UpdateSavingAccountInput } from "./dto/update-saving-account.input";
import { SavingAccount } from "./entities/saving-account.entity";
import { DataSource, Repository } from "typeorm";
import { ClientService } from "src/user/client/client.service";
import { ViewSaving } from "./saving-view.entity";
export declare class SavingAccountService {
    private readonly saving_accountRepository;
    private readonly clientService;
    private readonly dataSource;
    constructor(saving_accountRepository: Repository<SavingAccount>, clientService: ClientService, dataSource: DataSource);
    create(createSavingInput: CreateSavingAccountInput): Promise<any>;
    findAll(): Promise<ViewSaving[]>;
    findOne(id: number): Promise<any>;
    findAllByClient(identification: number): Promise<ViewSaving[]>;
    update(id: number, updateSavingAccountInput: UpdateSavingAccountInput): string;
    delete(id: number): Promise<Boolean>;
}
