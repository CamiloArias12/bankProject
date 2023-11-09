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
exports.BranchOfficeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const branch_office_service_1 = require("./branch-office.service");
const branch_office_entity_1 = require("./entities/branch-office.entity");
const create_branch_office_input_1 = require("./dto/create-branch-office.input");
const update_branch_office_input_1 = require("./dto/update-branch-office.input");
let BranchOfficeResolver = class BranchOfficeResolver {
    constructor(branchOfficeService) {
        this.branchOfficeService = branchOfficeService;
    }
    createBranchOffice(createBranchOfficeInput) {
        return this.branchOfficeService.create(createBranchOfficeInput);
    }
    findAllBranch() {
        return this.branchOfficeService.findAll();
    }
    findOneBranch(id) {
        return this.branchOfficeService.findOne(id);
    }
    updateBranchOffice(updateBranchOfficeInput) {
        return this.branchOfficeService.update(updateBranchOfficeInput.id, updateBranchOfficeInput);
    }
    deleteBranch(id) {
        return this.branchOfficeService.delete(id);
    }
};
exports.BranchOfficeResolver = BranchOfficeResolver;
__decorate([
    (0, graphql_1.Mutation)(() => branch_office_entity_1.BranchOffice),
    __param(0, (0, graphql_1.Args)("createBranchOfficeInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_branch_office_input_1.CreateBranchOfficeInput]),
    __metadata("design:returntype", void 0)
], BranchOfficeResolver.prototype, "createBranchOffice", null);
__decorate([
    (0, graphql_1.Query)(() => [branch_office_entity_1.BranchOffice]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BranchOfficeResolver.prototype, "findAllBranch", null);
__decorate([
    (0, graphql_1.Query)(() => branch_office_entity_1.BranchOffice),
    __param(0, (0, graphql_1.Args)("id", { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BranchOfficeResolver.prototype, "findOneBranch", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)("updateBranchOfficeInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_branch_office_input_1.UpdateBranchOfficeInput]),
    __metadata("design:returntype", void 0)
], BranchOfficeResolver.prototype, "updateBranchOffice", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)("id", { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BranchOfficeResolver.prototype, "deleteBranch", null);
exports.BranchOfficeResolver = BranchOfficeResolver = __decorate([
    (0, graphql_1.Resolver)(() => branch_office_entity_1.BranchOffice),
    __metadata("design:paramtypes", [branch_office_service_1.BranchOfficeService])
], BranchOfficeResolver);
//# sourceMappingURL=branch-office.resolver.js.map