import { Module } from "@nestjs/common";
import { BranchOfficeService } from "./branch-office.service";
import { BranchOfficeResolver } from "./branch-office.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BranchOffice } from "./entities/branch-office.entity";

@Module({
  imports: [TypeOrmModule.forFeature([BranchOffice])],  
  providers: [BranchOfficeResolver, BranchOfficeService],
})
export class BranchOfficeModule {}
