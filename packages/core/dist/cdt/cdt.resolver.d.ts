import { CdtService } from "./cdt.service";
import { CreateCdtInput } from "./dto/create-cdt.input";
import { ViewCdt } from "./cdt-view.entity";
export declare class CdtResolver {
    private readonly cdtService;
    constructor(cdtService: CdtService);
    createCdt(createCdtInput: CreateCdtInput): Promise<any>;
    findAllCdt(): Promise<ViewCdt[]>;
    findAllCdtByClient(identification: number): Promise<ViewCdt[]>;
    findOneCdt(id: number): Promise<any>;
    updateCdt(inputUser: CreateCdtInput, id: number): Promise<boolean>;
    deleteCdt(id: number): Promise<Boolean>;
}
