import { Injectable } from "@nestjs/common";
import { CreateBranchOfficeInput } from "./dto/create-branch-office.input";
import { UpdateBranchOfficeInput } from "./dto/update-branch-office.input";

@Injectable()
export class BranchOfficeService {
  create(createBranchOfficeInput: CreateBranchOfficeInput) {
    return "This action adds a new branchOffice";
  }

  findAll() {
    return `This action returns all branchOffice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} branchOffice`;
  }

  update(id: number, updateBranchOfficeInput: UpdateBranchOfficeInput) {
    return `This action updates a #${id} branchOffice`;
  }

  remove(id: number) {
    return `This action removes a #${id} branchOffice`;
  }
}
