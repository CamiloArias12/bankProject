import { IUser } from "./user.interface";
export declare class CreateUserInput implements IUser {
    identification: number;
    name: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    idBranch: number;
}
