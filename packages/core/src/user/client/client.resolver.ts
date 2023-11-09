import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Client } from './client.entity';
import { ClientService } from './client.service';
import { CreateUserInput } from '../dto/create-user-inupt';

@Resolver(() => Client)
export class ClientResolver {
    constructor(
       private readonly clientService: ClientService,
    ) {}

    @Mutation(() => Client)
    async createClient(@Args('inputClient')inputClient:CreateUserInput): Promise <Client>{
	 
	    return await  this.clientService.create(inputClient)
	 
    }
    @Query(() => [Client])
    async allClient(): Promise<Client[]> {
        return await this.clientService.findAll();
    }
   
    @Query(() => Client)
    async getClient(@Args('identification') identification:number): Promise<Client> {
        return await this.clientService.findOne(identification);
    }

   
}
