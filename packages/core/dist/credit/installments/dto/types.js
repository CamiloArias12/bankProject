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
exports.InstallmentPayment = exports.ChangeAmortization = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_installment_input_1 = require("./create-installment.input");
let ChangeAmortization = class ChangeAmortization {
};
exports.ChangeAmortization = ChangeAmortization;
__decorate([
    (0, graphql_1.Field)(() => [create_installment_input_1.CreateInstallment]),
    __metadata("design:type", Array)
], ChangeAmortization.prototype, "tableAmortization", void 0);
exports.ChangeAmortization = ChangeAmortization = __decorate([
    (0, graphql_1.InputType)()
], ChangeAmortization);
let InstallmentPayment = class InstallmentPayment {
};
exports.InstallmentPayment = InstallmentPayment;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], InstallmentPayment.prototype, "installmentNumber", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], InstallmentPayment.prototype, "credit", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], InstallmentPayment.prototype, "paymentDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], InstallmentPayment.prototype, "scheduledPayment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], InstallmentPayment.prototype, "interest", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], InstallmentPayment.prototype, "finalBalance", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], InstallmentPayment.prototype, "identification", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstallmentPayment.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstallmentPayment.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], InstallmentPayment.prototype, "typeCredit", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], InstallmentPayment.prototype, "extraPayment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], InstallmentPayment.prototype, "totalPayment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], InstallmentPayment.prototype, "capital", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], InstallmentPayment.prototype, "interestPayment", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], InstallmentPayment.prototype, "idTypeCredit", void 0);
__decorate([
    (0, graphql_1.Field)({ defaultValue: false }),
    __metadata("design:type", Boolean)
], InstallmentPayment.prototype, "isSelected", void 0);
exports.InstallmentPayment = InstallmentPayment = __decorate([
    (0, graphql_1.InputType)("InputTypeInstallmentPayment"),
    (0, graphql_1.ObjectType)("InstallmentPayment")
], InstallmentPayment);
//# sourceMappingURL=types.js.map