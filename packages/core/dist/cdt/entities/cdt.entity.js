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
exports.Cdt = void 0;
const graphql_1 = require("@nestjs/graphql");
const payment_cdt_entity_1 = require("../../payment/entities/payment-cdt.entity");
const client_entity_1 = require("../../user/client/client.entity");
const typeorm_1 = require("typeorm");
let Cdt = class Cdt {
};
exports.Cdt = Cdt;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cdt.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Cdt.prototype, "depositAmount", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Cdt.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Cdt.prototype, "maturityDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Cdt.prototype, "interestRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_entity_1.Client),
    (0, typeorm_1.ManyToOne)(() => client_entity_1.Client, client => client.cdts, { onUpdate: 'CASCADE', nullable: false }),
    __metadata("design:type", client_entity_1.Client)
], Cdt.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_cdt_entity_1.PaymentCdt]),
    (0, typeorm_1.OneToMany)(() => payment_cdt_entity_1.PaymentCdt, payment => payment.cdt, { nullable: false }),
    __metadata("design:type", Array)
], Cdt.prototype, "payments", void 0);
exports.Cdt = Cdt = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Cdt);
//# sourceMappingURL=cdt.entity.js.map