import { Injectable } from "@nestjs/common";
import { CreateCdtInput } from "./dto/create-cdt.input";
import { UpdateCdtInput } from "./dto/update-cdt.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Cdt } from "./entities/cdt.entity";
import { DataSource, Repository } from "typeorm";
import { ClientService } from "src/user/client/client.service";
import { ViewCdt } from "./cdt-view.entity";
import { Client } from "src/user/client/client.entity";
import { User } from "src/user/user.entity";

@Injectable()
export class CdtService {
  constructor(
    @InjectRepository(Cdt)
    private readonly cdtRepository: Repository<Cdt>,
    private readonly clientService: ClientService,
    private readonly dataSource: DataSource,
  ) {}

  async create(createCdtInput: CreateCdtInput) {
    const client = await this.clientService.findOne(createCdtInput.clientId);
    const cdt = this.cdtRepository.create(createCdtInput);
    cdt.client = client;

    return this.cdtRepository.save(cdt);
  }
  async findAllByClient(identification: number): Promise<ViewCdt[]> {
    const query = await this.dataSource
      .createQueryBuilder()
      .select("user.identification", "identification")
      .addSelect("user.name", "name")
      .addSelect("user.lastName", "lastName")
      .addSelect("cdt.id", "id")
      .addSelect("cdt.startDate", "startDate")
      .addSelect("cdt.depositAmount", "depositAmount")
      .addSelect("cdt.interestRate", "interestRate")
      .addSelect("cdt.maturityDate", "maturityDate")
      .from(Cdt, "cdt")
      .leftJoin(Client, "client", "cdt.clientIdClient= client.idClient")
      .leftJoin(User, "user", "client.idClient= user.identification")
      .where("client.idClient= :idClient", { idClient: identification })
      .getRawMany();

    return query;
  }
  async findAll(): Promise<ViewCdt[]> {
    console.log(await this.dataSource.manager.find(ViewCdt));
    return await this.dataSource.manager.find(ViewCdt);
  }

  async findOne(id: number) {
    return await this.cdtRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateCdtInput: CreateCdtInput) {
    try {
      await this.cdtRepository.update(
        { id: id },
        {
          depositAmount: updateCdtInput.depositAmount,
          maturityDate: updateCdtInput.maturityDate,
          interestRate: updateCdtInput.interestRate,
          startDate: updateCdtInput.startDate,
        },
      );
      return true;
    } catch (e) {
      return false;
      /* handle error */
    }
  }

  async delete(id: number): Promise<Boolean> {
    try {
      await this.cdtRepository.delete(id);
      return true;
    } catch (e) {
      return false;
    }
  }
}
