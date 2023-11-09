"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const employee_entity_1 = require("./employee.entity");
const employee_service_1 = require("./employee.service");
const create_user_inupt_1 = require("../dto/create-user-inupt");
let EmployeeResolver = class EmployeeResolver {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    async allEmployees() {
        return await this.employeeService.findAll();
    }
    async createEmployee(inputEmployee) {
        return await this.employeeService.create(inputEmployee);
    }
};
exports.EmployeeResolver = EmployeeResolver;
__decorate([
    (0, graphql_1.Query)(() => [employee_entity_1.Employee]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "allEmployees", null);
__decorate([
    (0, graphql_1.Mutation)(() => employee_entity_1.Employee),
    __param(0, (0, graphql_1.Args)('inputEmployee')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_inupt_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], EmployeeResolver.prototype, "createEmployee", null);
exports.EmployeeResolver = EmployeeResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeResolver);
//# sourceMappingURL=employee.resolver.js.map