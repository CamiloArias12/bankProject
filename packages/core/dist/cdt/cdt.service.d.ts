import { CreateCdtInput } from "./dto/create-cdt.input";
import { Cdt } from "./entities/cdt.entity";
import { DataSource, Repository } from "typeorm";
import { ClientService } from "src/user/client/client.service";
import { ViewCdt } from "./cdt-view.entity";
export declare class CdtService {
    private readonly cdtRepository;
    private readonly clientService;
    private readonly dataSource;
    constructor(cdtRepository: Repository<Cdt>, clientService: ClientService, dataSource: DataSource);
    create(createCdtInput: CreateCdtInput): Promise<any>;
    findAllByClient(identification: number): Promise<ViewCdt[]>;
    findAll(): Promise<ViewCdt[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updateCdtInput: CreateCdtInput): Promise<boolean>;
    delete(id: number): Promise<Boolean>;
}
