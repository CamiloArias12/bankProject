import { User } from './user.entity';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user-inupt';
import { Auth } from './dto/enum-type';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    findOne(id: number): Promise<User>;
    findAll(): Promise<User[]>;
    updateUser(inputUser: CreateUserInput, identification: number): Promise<boolean>;
    authentication(identification: number, password: string): Promise<Auth>;
    deleteUser(identification: number): Promise<Boolean>;
}
