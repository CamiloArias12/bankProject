import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserInput } from "./dto/create-user-inupt";
import { Auth, EnumUser } from "./dto/enum-type";
import { SignInReqDTO } from "./user.controller";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async signIn(signInReqDTO: SignInReqDTO) {
    const query = await this.userRepository.findOne({
      where: { identification: signInReqDTO.identification, password: signInReqDTO.password },
      relations: { client: true, employee: true }
    });

    if (query) {
      return {
        identification: query.identification,
        role: query.client ? EnumUser.CLIENT : EnumUser.EMPLOYEE,
      };
    }

  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(identification: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { identification: identification },
    });
  }

  async authentication(
    identification: number,
    password: string,
  ): Promise<Auth> {
    const query = await this.userRepository.findOne({
      where: { identification: identification, password: password },
      relations: { client: true, employee: true },
    });

    if (query) {
      return {
        identification: query.identification,
        role: query.client ? EnumUser.CLIENT : EnumUser.EMPLOYEE,
      };
    }
  }
  async update(identification: number, input: CreateUserInput) {
    try {
      await this.userRepository.update(
        { identification: identification },
        { ...input },
      );
      return true;
    } catch (e) {
      return false;
    }
  }

  async delete(identification: number): Promise<Boolean> {
    try {
      await this.userRepository.delete(identification);
      return true;
    } catch (e) {
      return false;
    }
  }
}
