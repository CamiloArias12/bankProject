import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminResolver } from "./admin.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Admin } from "./entities/admin.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  providers: [AdminResolver, AdminService],
})
export class AdminModule {}
