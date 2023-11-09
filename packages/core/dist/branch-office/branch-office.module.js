"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchOfficeModule = void 0;
const common_1 = require("@nestjs/common");
const branch_office_service_1 = require("./branch-office.service");
const branch_office_resolver_1 = require("./branch-office.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const branch_office_entity_1 = require("./entities/branch-office.entity");
let BranchOfficeModule = class BranchOfficeModule {
};
exports.BranchOfficeModule = BranchOfficeModule;
exports.BranchOfficeModule = BranchOfficeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([branch_office_entity_1.BranchOffice])],
        providers: [branch_office_resolver_1.BranchOfficeResolver, branch_office_service_1.BranchOfficeService],
    })
], BranchOfficeModule);
//# sourceMappingURL=branch-office.module.js.map