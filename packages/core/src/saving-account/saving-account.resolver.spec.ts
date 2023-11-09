import { Test, TestingModule } from "@nestjs/testing";
import { SavingAccountResolver } from "./saving-account.resolver";
import { SavingAccountService } from "./saving-account.service";

describe("SavingAccountResolver", () => {
  let resolver: SavingAccountResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SavingAccountResolver, SavingAccountService],
    }).compile();

    resolver = module.get<SavingAccountResolver>(SavingAccountResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
