import { Injectable } from "@nestjs/common";
import { CreateSavingAccountInput } from "./dto/create-saving-account.input";
import { UpdateSavingAccountInput } from "./dto/update-saving-account.input";
import { SavingAccount } from "./entities/saving-account.entity";
import { DataSource, Repository } from "typeorm";
import { ClientService } from "src/user/client/client.service";
import { InjectRepository } from "@nestjs/typeorm";
import { ViewSaving } from "./saving-view.entity";
import { Client } from "src/user/client/client.entity";
import { User } from "src/user/user.entity";

@Injectable()
export class SavingAccountService {
  constructor(
    @InjectRepository(SavingAccount)
    private readonly saving_accountRepository: Repository<SavingAccount>,
    private readonly clientService: ClientService,
    private readonly dataSource: DataSource,
  ) {}

  async create(createSavingInput: CreateSavingAccountInput) {
    const client = await this.clientService.findOne(createSavingInput.clientId);
    const saving_account = new SavingAccount();
    saving_account.openingDate = createSavingInput.openingDate;
    saving_account.interestRate = createSavingInput.interestRate;
    saving_account.client = client;
    return this.saving_accountRepository.save(saving_account);
  }

  async findAll(): Promise<ViewSaving[]> {
    return await this.dataSource.manager.find(ViewSaving);
  }

  async findOne(id: number) {
    return await this.saving_accountRepository.findOne({ where: { id: id } });
  }

  async findAllByClient(identification: number): Promise<ViewSaving[]> {
    return await this.dataSource
      .createQueryBuilder()
      .select("user.identification", "identification")
      .addSelect("user.name", "name")
      .addSelect("user.lastName", "lastName")
      .addSelect("saving.id", "id")
      .addSelect("saving.openingDate", "openingDate")
      .addSelect("saving.interestRate", "interestRate")
      .from(SavingAccount, "saving")
      .leftJoin(Client, "client", "saving.clientIdClient= client.idClient")
      .leftJoin(User, "user", "client.idClient= user.identification")
      .where("client.idClient= :idClient", { idClient: identification })
      .getRawMany();
  }

  update(id: number, updateSavingAccountInput: UpdateSavingAccountInput) {
    return `This action updates a #${id} savingAccount`;
  }

  async delete(id: number): Promise<Boolean> {
    try {
      await this.saving_accountRepository.delete(id);
      return true;
    } catch (e) {
      return false;
    }
  }
}
