import { Injectable } from '@nestjs/common';
import { CreateSavingAccountInput } from './dto/create-saving-account.input';
import { UpdateSavingAccountInput } from './dto/update-saving-account.input';

@Injectable()
export class SavingAccountService {
  create(createSavingAccountInput: CreateSavingAccountInput) {
    return 'This action adds a new savingAccount';
  }

  findAll() {
    return `This action returns all savingAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} savingAccount`;
  }

  update(id: number, updateSavingAccountInput: UpdateSavingAccountInput) {
    return `This action updates a #${id} savingAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} savingAccount`;
  }
}
