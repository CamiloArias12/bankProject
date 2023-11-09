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
exports.SavingAccountResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const saving_account_service_1 = require("./saving-account.service");
const create_saving_account_input_1 = require("./dto/create-saving-account.input");
const update_saving_account_input_1 = require("./dto/update-saving-account.input");
const saving_account_entity_1 = require("./entities/saving-account.entity");
const saving_view_entity_1 = require("./saving-view.entity");
let SavingAccountResolver = class SavingAccountResolver {
    constructor(savingAccountService) {
        this.savingAccountService = savingAccountService;
    }
    async createSavingAccount(createSavingAccountInput) {
        return await this.savingAccountService.create(createSavingAccountInput);
    }
    findAllSavingAccount() {
        return this.savingAccountService.findAll();
    }
    findOne(id) {
        return this.savingAccountService.findOne(id);
    }
    updateSavingAccount(updateSavingAccountInput) {
        return this.savingAccountService.update(updateSavingAccountInput.id, updateSavingAccountInput);
    }
    async findAllSavingAccountByClient(identification) {
        return await this.savingAccountService.findAllByClient(identification);
    }
    removeSavingAccount(id) {
        return this.savingAccountService.delete(id);
    }
};
exports.SavingAccountResolver = SavingAccountResolver;
__decorate([
    (0, graphql_1.Mutation)(() => saving_account_entity_1.SavingAccount),
    __param(0, (0, graphql_1.Args)("createSavingAccountInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_saving_account_input_1.CreateSavingAccountInput]),
    __metadata("design:returntype", Promise)
], SavingAccountResolver.prototype, "createSavingAccount", null);
__decorate([
    (0, graphql_1.Query)(() => [saving_view_entity_1.ViewSaving]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SavingAccountResolver.prototype, "findAllSavingAccount", null);
__decorate([
    (0, graphql_1.Query)(() => saving_account_entity_1.SavingAccount, { name: "savingAccount" }),
    __param(0, (0, graphql_1.Args)("id", { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SavingAccountResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => saving_account_entity_1.SavingAccount),
    __param(0, (0, graphql_1.Args)("updateSavingAccountInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_saving_account_input_1.UpdateSavingAccountInput]),
    __metadata("design:returntype", void 0)
], SavingAccountResolver.prototype, "updateSavingAccount", null);
__decorate([
    (0, graphql_1.Query)(() => [saving_view_entity_1.ViewSaving]),
    __param(0, (0, graphql_1.Args)("identification")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SavingAccountResolver.prototype, "findAllSavingAccountByClient", null);
__decorate([
    (0, graphql_1.Mutation)(() => saving_account_entity_1.SavingAccount),
    __param(0, (0, graphql_1.Args)("id", { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SavingAccountResolver.prototype, "removeSavingAccount", null);
exports.SavingAccountResolver = SavingAccountResolver = __decorate([
    (0, graphql_1.Resolver)(() => saving_account_entity_1.SavingAccount),
    __metadata("design:paramtypes", [saving_account_service_1.SavingAccountService])
], SavingAccountResolver);
//# sourceMappingURL=saving-account.resolver.js.map