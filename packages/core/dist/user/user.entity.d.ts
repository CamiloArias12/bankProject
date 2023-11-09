import { Client } from "./client/client.entity";
import { Employee } from "./employee/employee.entity";
import { BranchOffice } from "src/branch-office/entities/branch-office.entity";
import { IUser } from "./dto/user.interface";
export declare class User implements IUser {
    identification: number;
    name: string;
    lastName: string;
    phone: string;
    idBranch: number;
    email: string;
    password: string;
    client: Client;
    employee: Employee;
    branch: BranchOffice;
    constructor(params?: IUser);
}
