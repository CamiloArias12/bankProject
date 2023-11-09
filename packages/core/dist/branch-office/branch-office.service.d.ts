import { CreateBranchOfficeInput } from "./dto/create-branch-office.input";
import { UpdateBranchOfficeInput } from "./dto/update-branch-office.input";
import { BranchOffice } from "./entities/branch-office.entity";
import { Repository } from "typeorm";
export declare class BranchOfficeService {
    private readonly branchRepository;
    constructor(branchRepository: Repository<BranchOffice>);
    create(createBranchOfficeInput: CreateBranchOfficeInput): Promise<any>;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, inputBranch: UpdateBranchOfficeInput): Promise<boolean>;
    delete(code: number): Promise<Boolean>;
}
