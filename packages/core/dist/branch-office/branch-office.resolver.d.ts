import { BranchOfficeService } from "./branch-office.service";
import { CreateBranchOfficeInput } from "./dto/create-branch-office.input";
import { UpdateBranchOfficeInput } from "./dto/update-branch-office.input";
export declare class BranchOfficeResolver {
    private readonly branchOfficeService;
    constructor(branchOfficeService: BranchOfficeService);
    createBranchOffice(createBranchOfficeInput: CreateBranchOfficeInput): Promise<any>;
    findAllBranch(): any;
    findOneBranch(id: number): any;
    updateBranchOffice(updateBranchOfficeInput: UpdateBranchOfficeInput): Promise<boolean>;
    deleteBranch(id: number): Promise<Boolean>;
}
