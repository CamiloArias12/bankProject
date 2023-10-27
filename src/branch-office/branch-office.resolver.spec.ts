import { Test, TestingModule } from '@nestjs/testing';
import { BranchOfficeResolver } from './branch-office.resolver';
import { BranchOfficeService } from './branch-office.service';

describe('BranchOfficeResolver', () => {
  let resolver: BranchOfficeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BranchOfficeResolver, BranchOfficeService],
    }).compile();

    resolver = module.get<BranchOfficeResolver>(BranchOfficeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
