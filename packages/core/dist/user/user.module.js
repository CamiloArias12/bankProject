"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const user_service_1 = require("./user.service");
const user_resolver_1 = require("./user.resolver");
const employee_entity_1 = require("./employee/employee.entity");
const client_entity_1 = require("./client/client.entity");
const client_service_1 = require("./client/client.service");
const client_resolver_1 = require("./client/client.resolver");
const employee_service_1 = require("./employee/employee.service");
const employee_resolver_1 = require("./employee/employee.resolver");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, employee_entity_1.Employee, client_entity_1.Client])],
        providers: [user_service_1.UserService, user_resolver_1.UserResolver, client_service_1.ClientService, client_resolver_1.ClientResolver, employee_service_1.EmployeeService, employee_resolver_1.EmployeeResolver],
        exports: [client_service_1.ClientService, employee_service_1.EmployeeService]
    })
], UserModule);
//# sourceMappingURL=user.module.js.map