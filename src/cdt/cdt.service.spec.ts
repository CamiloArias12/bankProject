import { Test, TestingModule } from '@nestjs/testing';
import { CdtService } from './cdt.service';

describe('CdtService', () => {
  let service: CdtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdtService],
    }).compile();

    service = module.get<CdtService>(CdtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
