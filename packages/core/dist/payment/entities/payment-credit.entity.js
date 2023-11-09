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
exports.PaymentCredit = void 0;
const graphql_1 = require("@nestjs/graphql");
const installment_entity_1 = require("../../credit/installments/installment.entity");
const typeorm_1 = require("typeorm");
let PaymentCredit = class PaymentCredit {
};
exports.PaymentCredit = PaymentCredit;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaymentCredit.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ defaultValue: "Credit" }),
    __metadata("design:type", String)
], PaymentCredit.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PaymentCredit.prototype, "value", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], PaymentCredit.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => installment_entity_1.Installment),
    (0, typeorm_1.ManyToOne)(() => installment_entity_1.Installment, installment => installment.payments, { nullable: false }),
    __metadata("design:type", installment_entity_1.Installment)
], PaymentCredit.prototype, "installment", void 0);
exports.PaymentCredit = PaymentCredit = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], PaymentCredit);
//# sourceMappingURL=payment-credit.entity.js.map