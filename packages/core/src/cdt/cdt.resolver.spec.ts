import { Test, TestingModule } from "@nestjs/testing";
import { CdtResolver } from "./cdt.resolver";
import { CdtService } from "./cdt.service";

describe("CdtResolver", () => {
  let resolver: CdtResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CdtResolver, CdtService],
    }).compile();

    resolver = module.get<CdtResolver>(CdtResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
