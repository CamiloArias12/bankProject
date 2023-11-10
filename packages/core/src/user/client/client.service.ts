import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "./client.entity";
import { Repository } from "typeorm";
import { CreateUserInput } from "../dto/create-user-inupt";
import { User } from "../user.entity";

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async create(userInput: CreateUserInput): Promise<Client> {
    const user: User = new User(userInput);
    const client: Client = new Client();
    client.user = user;
    return await this.clientRepository.save(client);
  }

  async findAll(): Promise<Client[]> {
    return this.clientRepository.find({ relations: { user: true } });
  }

  async findOne(identification: number): Promise<Client> {
    return await this.clientRepository.findOne({
      where: { idClient: identification },
    });
  }
}
