import { Injectable } from "@nestjs/common";
import { CreateCdtInput } from "./dto/create-cdt.input";
import { UpdateCdtInput } from "./dto/update-cdt.input";

@Injectable()
export class CdtService {
  create(createCdtInput: CreateCdtInput) {
    return "This action adds a new cdt";
  }

  findAll() {
    return `This action returns all cdt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cdt`;
  }

  update(id: number, updateCdtInput: UpdateCdtInput) {
    return `This action updates a #${id} cdt`;
  }

  remove(id: number) {
    return `This action removes a #${id} cdt`;
  }
}
