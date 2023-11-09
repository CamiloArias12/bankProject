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
exports.CreateInstallment = void 0;
const graphql_1 = require("@nestjs/graphql");
let CreateInstallment = class CreateInstallment {
};
exports.CreateInstallment = CreateInstallment;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateInstallment.prototype, "installmentNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], CreateInstallment.prototype, "paymentDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateInstallment.prototype, "initialBalance", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateInstallment.prototype, "scheduledPayment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateInstallment.prototype, "extraPayment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateInstallment.prototype, "totalPayment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateInstallment.prototype, "capital", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateInstallment.prototype, "interest", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateInstallment.prototype, "finalBalance", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], CreateInstallment.prototype, "isPay", void 0);
exports.CreateInstallment = CreateInstallment = __decorate([
    (0, graphql_1.InputType)("InstallmentInput"),
    (0, graphql_1.ObjectType)("InstallmentType")
], CreateInstallment);
//# sourceMappingURL=create-installment.input.js.map