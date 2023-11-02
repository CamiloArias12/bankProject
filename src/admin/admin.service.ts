import { Injectable } from "@nestjs/common";
import { CreateAdminInput } from "./dto/create-admin.input";
import { UpdateAdminInput } from "./dto/update-admin.input";
import { Repository } from "typeorm";
import { Admin } from "./entities/admin.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>
  ){}
  async create(createAdminInput: CreateAdminInput) {
    return await this.adminRepository.save(createAdminInput);
  }

  async findAll() {
    return await this.adminRepository.find();
  }

  async findOne(id: number) {
    return await this.adminRepository.findOne({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateAdminInput: UpdateAdminInput) {
    return this.adminRepository.update({id: id}, {...updateAdminInput});
  }

  async remove(id: number) {
    return await this.adminRepository.delete({id: id});
  }
}
