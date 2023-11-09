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
exports.CreditResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const credit_service_1 = require("./credit.service");
const create_credit_input_1 = require("./dto/create-credit.input");
const credit_entity_1 = require("./credit.entity");
const create_installment_input_1 = require("./installments/dto/create-installment.input");
const credit_view_entity_1 = require("./credit-view.entity");
let CreditResolver = class CreditResolver {
    constructor(creditService) {
        this.creditService = creditService;
    }
    async createCredit(createCreditInput) {
        return await this.creditService.create(createCreditInput);
    }
    async findOneCredit(id) {
        return this.creditService.findOne(id);
    }
    async isRefinance(id) {
        return this.creditService.isRefinance(id);
    }
    async deleteCredit(id) {
        return this.creditService.delete(id);
    }
    async amortizationTableGenerate(date, creditValue, interest, installments) {
        return await this.creditService.amortizationTableGenerate(date, creditValue, interest, installments);
    }
    async findAllCredit() {
        return await this.creditService.findAll();
    }
    async findAllCreditByClient(identification) {
        return await this.creditService.findAllByClient(identification);
    }
};
exports.CreditResolver = CreditResolver;
__decorate([
    (0, graphql_1.Mutation)(() => credit_entity_1.Credit),
    __param(0, (0, graphql_1.Args)('createCreditInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_credit_input_1.CreateCreditInput]),
    __metadata("design:returntype", Promise)
], CreditResolver.prototype, "createCredit", null);
__decorate([
    (0, graphql_1.Query)(() => credit_entity_1.Credit),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CreditResolver.prototype, "findOneCredit", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CreditResolver.prototype, "isRefinance", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CreditResolver.prototype, "deleteCredit", null);
__decorate([
    (0, graphql_1.Mutation)(() => [create_installment_input_1.CreateInstallment]),
    __param(0, (0, graphql_1.Args)('Date', { type: () => Date })),
    __param(1, (0, graphql_1.Args)('creditValue')),
    __param(2, (0, graphql_1.Args)('interest')),
    __param(3, (0, graphql_1.Args)('installments', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], CreditResolver.prototype, "amortizationTableGenerate", null);
__decorate([
    (0, graphql_1.Query)(() => [credit_view_entity_1.ViewCredit]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CreditResolver.prototype, "findAllCredit", null);
__decorate([
    (0, graphql_1.Query)(() => [credit_view_entity_1.ViewCredit]),
    __param(0, (0, graphql_1.Args)("identification")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CreditResolver.prototype, "findAllCreditByClient", null);
exports.CreditResolver = CreditResolver = __decorate([
    (0, graphql_1.Resolver)(() => credit_entity_1.Credit),
    __metadata("design:paramtypes", [credit_service_1.CreditService])
], CreditResolver);
//# sourceMappingURL=credit.resolver.js.map