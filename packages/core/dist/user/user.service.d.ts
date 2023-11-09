import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserInput } from './dto/create-user-inupt';
import { Auth } from './dto/enum-type';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(identification: number): Promise<User>;
    authentication(identification: number, password: string): Promise<Auth>;
    update(identification: number, input: CreateUserInput): Promise<boolean>;
    delete(identification: number): Promise<Boolean>;
}
