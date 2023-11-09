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
exports.Installment = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const credit_entity_1 = require("../credit.entity");
const enum_types_1 = require("./dto/enum-types");
const payment_credit_entity_1 = require("../../payment/entities/payment-credit.entity");
let Installment = class Installment {
};
exports.Installment = Installment;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Installment.prototype, "installmentNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Installment.prototype, "id_credit", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date),
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Installment.prototype, "paymentDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Installment.prototype, "initialBalance", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Installment.prototype, "scheduledPayment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Installment.prototype, "extraPayment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Installment.prototype, "totalPayment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Installment.prototype, "capital", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Installment.prototype, "interest", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Installment.prototype, "finalBalance", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_types_1.StateInstallment,
        nullable: false,
        default: enum_types_1.StateInstallment.PENDIENTE
    }),
    __metadata("design:type", String)
], Installment.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => credit_entity_1.Credit),
    (0, typeorm_1.ManyToOne)(() => credit_entity_1.Credit, credit => credit.installments, { nullable: false, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'id_credit' }),
    __metadata("design:type", credit_entity_1.Credit)
], Installment.prototype, "credit", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_credit_entity_1.PaymentCredit]),
    (0, typeorm_1.OneToMany)(() => payment_credit_entity_1.PaymentCredit, payment => payment.installment, { nullable: false }),
    __metadata("design:type", Array)
], Installment.prototype, "payments", void 0);
exports.Installment = Installment = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Installment);
//# sourceMappingURL=installment.entity.js.map