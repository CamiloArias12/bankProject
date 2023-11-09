import { Client } from './client.entity';
import { ClientService } from './client.service';
import { CreateUserInput } from '../dto/create-user-inupt';
export declare class ClientResolver {
    private readonly clientService;
    constructor(clientService: ClientService);
    createClient(inputClient: CreateUserInput): Promise<Client>;
    allClient(): Promise<Client[]>;
    getClient(identification: number): Promise<Client>;
}
