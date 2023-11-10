import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { UserResolver } from "./user.resolver";
import { Employee } from "./employee/employee.entity";
import { Client } from "./client/client.entity";
import { ClientService } from "./client/client.service";
import { ClientResolver } from "./client/client.resolver";
import { EmployeeService } from "./employee/employee.service";
import { EmployeeResolver } from "./employee/employee.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([User, Employee, Client])],
  providers: [
    UserService,
    UserResolver,
    ClientService,
    ClientResolver,
    EmployeeService,
    EmployeeResolver,
  ],
  exports: [ClientService, EmployeeService],
})
export class UserModule {}
