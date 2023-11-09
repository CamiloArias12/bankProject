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
exports.PaymentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const payment_service_1 = require("./payment.service");
const create_payment_input_1 = require("./dto/create-payment.input");
const payment_credit_entity_1 = require("./entities/payment-credit.entity");
const payment_cdt_entity_1 = require("./entities/payment-cdt.entity");
const payment_account_entity_1 = require("./entities/payment-account.entity");
let PaymentResolver = class PaymentResolver {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }
    async createPaymentCredit(createPaymentInput) {
        return this.paymentService.createPaymentCredit(createPaymentInput);
    }
    async createPaymentCdt(createPaymentInput) {
        return this.paymentService.createPaymentCdt(createPaymentInput);
    }
    async createPaymentAccount(createPaymentInput) {
        return this.paymentService.createPaymentAccount(createPaymentInput);
    }
    async findAllPaymentCredit() {
        return await this.paymentService.findAllPaymentCredit();
    }
    async findAllPaymentCdt() {
        return await this.paymentService.findAllPaymentCredit();
    }
    async findAllPaymentAccount() {
        return await this.paymentService.findAllPaymentAccount();
    }
};
exports.PaymentResolver = PaymentResolver;
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('createPaymentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_input_1.CreatePaymentInput]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "createPaymentCredit", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('createPaymentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_input_1.CreatePaymentInput]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "createPaymentCdt", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)('createPaymentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_input_1.CreatePaymentInput]),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "createPaymentAccount", null);
__decorate([
    (0, graphql_1.Query)(() => [payment_credit_entity_1.PaymentCredit]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "findAllPaymentCredit", null);
__decorate([
    (0, graphql_1.Query)(() => [payment_cdt_entity_1.PaymentCdt]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "findAllPaymentCdt", null);
__decorate([
    (0, graphql_1.Query)(() => [payment_account_entity_1.PaymentAccount]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentResolver.prototype, "findAllPaymentAccount", null);
exports.PaymentResolver = PaymentResolver = __decorate([
    (0, graphql_1.Resolver)(() => payment_credit_entity_1.PaymentCredit),
    __metadata("design:paramtypes", [payment_service_1.PaymentService])
], PaymentResolver);
//# sourceMappingURL=payment.resolver.js.map