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
exports.PaymentCdt = void 0;
const graphql_1 = require("@nestjs/graphql");
const cdt_entity_1 = require("../../cdt/entities/cdt.entity");
const typeorm_1 = require("typeorm");
let PaymentCdt = class PaymentCdt {
};
exports.PaymentCdt = PaymentCdt;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PaymentCdt.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ defaultValue: "Cdt" }),
    __metadata("design:type", String)
], PaymentCdt.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PaymentCdt.prototype, "value", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], PaymentCdt.prototype, "date", void 0);
__decorate([
    (0, graphql_1.Field)(() => cdt_entity_1.Cdt),
    (0, typeorm_1.ManyToOne)(() => cdt_entity_1.Cdt, cdt => cdt.payments, { nullable: false }),
    __metadata("design:type", cdt_entity_1.Cdt)
], PaymentCdt.prototype, "cdt", void 0);
exports.PaymentCdt = PaymentCdt = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], PaymentCdt);
//# sourceMappingURL=payment-cdt.entity.js.map