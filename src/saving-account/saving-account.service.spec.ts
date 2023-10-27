import { Test, TestingModule } from '@nestjs/testing';
import { SavingAccountService } from './saving-account.service';

describe('SavingAccountService', () => {
  let service: SavingAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SavingAccountService],
    }).compile();

    service = module.get<SavingAccountService>(SavingAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
