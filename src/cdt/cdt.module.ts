import { Module } from '@nestjs/common';
import { CdtService } from './cdt.service';
import { CdtResolver } from './cdt.resolver';

@Module({
  providers: [CdtResolver, CdtService],
})
export class CdtModule {}
