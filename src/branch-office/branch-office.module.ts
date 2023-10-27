import { Module } from '@nestjs/common';
import { BranchOfficeService } from './branch-office.service';
import { BranchOfficeResolver } from './branch-office.resolver';

@Module({
  providers: [BranchOfficeResolver, BranchOfficeService],
})
export class BranchOfficeModule {}
