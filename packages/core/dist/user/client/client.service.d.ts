import { Client } from './client.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from '../dto/create-user-inupt';
export declare class ClientService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<Client>);
    create(userInput: CreateUserInput): Promise<Client>;
    findAll(): Promise<Client[]>;
    findOne(identification: number): Promise<Client>;
}
