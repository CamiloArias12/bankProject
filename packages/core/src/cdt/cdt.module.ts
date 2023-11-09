import { Module } from "@nestjs/common";
import { CdtService } from "./cdt.service";
import { CdtResolver } from "./cdt.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cdt } from "./entities/cdt.entity";
import { UserModule } from "src/user/user.module";

@Module({
  imports:[TypeOrmModule.forFeature([Cdt]),UserModule], 
  providers: [CdtResolver, CdtService],
  exports:[CdtService]
})
export class CdtModule {}
