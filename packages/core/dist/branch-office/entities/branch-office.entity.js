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
exports.BranchOffice = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../../user/user.entity");
const typeorm_1 = require("typeorm");
let BranchOffice = class BranchOffice {
};
exports.BranchOffice = BranchOffice;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BranchOffice.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BranchOffice.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BranchOffice.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BranchOffice.prototype, "phoneNumber", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_entity_1.User]),
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.branch, { nullable: false, cascade: ['insert', 'update', 'remove'] }),
    __metadata("design:type", Array)
], BranchOffice.prototype, "users", void 0);
exports.BranchOffice = BranchOffice = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], BranchOffice);
//# sourceMappingURL=branch-office.entity.js.map