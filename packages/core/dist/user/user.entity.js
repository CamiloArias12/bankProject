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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const client_entity_1 = require("./client/client.entity");
const employee_entity_1 = require("./employee/employee.entity");
const branch_office_entity_1 = require("../branch-office/entities/branch-office.entity");
let User = class User {
    constructor(params) {
        Object.assign(this, params);
    }
};
exports.User = User;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], User.prototype, "identification", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "idBranch", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_entity_1.Client, { nullable: true }),
    (0, typeorm_1.OneToOne)(() => client_entity_1.Client, client => client.user),
    __metadata("design:type", client_entity_1.Client)
], User.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => employee_entity_1.Employee, { nullable: true }),
    (0, typeorm_1.OneToOne)(() => employee_entity_1.Employee, employee => employee.user),
    __metadata("design:type", employee_entity_1.Employee)
], User.prototype, "employee", void 0);
__decorate([
    (0, graphql_1.Field)(() => branch_office_entity_1.BranchOffice, { nullable: true }),
    (0, typeorm_1.ManyToOne)(() => branch_office_entity_1.BranchOffice, branch => branch.users, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'idBranch' }),
    __metadata("design:type", branch_office_entity_1.BranchOffice)
], User.prototype, "branch", void 0);
exports.User = User = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], User);
//# sourceMappingURL=user.entity.js.map