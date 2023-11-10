import { Injectable } from "@nestjs/common";
import { CreateBranchOfficeInput } from "./dto/create-branch-office.input";
import { UpdateBranchOfficeInput } from "./dto/update-branch-office.input";
import { InjectRepository } from "@nestjs/typeorm";
import { BranchOffice } from "./entities/branch-office.entity";
import { Repository } from "typeorm";

@Injectable()
export class BranchOfficeService {
  constructor(
    @InjectRepository(BranchOffice)
    private readonly branchRepository: Repository<BranchOffice>,
  ) {}

  async create(createBranchOfficeInput: CreateBranchOfficeInput) {
    return await this.branchRepository.save(createBranchOfficeInput);
  }

  findAll() {
    return this.branchRepository.find();
  }

  findOne(id: number) {
    return this.branchRepository.findOne({ where: { id: id } });
  }

  async update(id: number, inputBranch: UpdateBranchOfficeInput) {
    try {
      await this.branchRepository.update({ id: id }, { ...inputBranch });
      return true;
    } catch (e) {
      return false;
      /* handle error */
    }
  }

  async delete(code: number): Promise<Boolean> {
    try {
      await this.branchRepository.delete(code);
      return true;
    } catch (e) {
      return false;
    }
  }
}
