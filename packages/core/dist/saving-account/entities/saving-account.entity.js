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
exports.SavingAccount = void 0;
const graphql_1 = require("@nestjs/graphql");
const payment_account_entity_1 = require("../../payment/entities/payment-account.entity");
const client_entity_1 = require("../../user/client/client.entity");
const typeorm_1 = require("typeorm");
let SavingAccount = class SavingAccount {
};
exports.SavingAccount = SavingAccount;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], SavingAccount.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], SavingAccount.prototype, "openingDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], SavingAccount.prototype, "interestRate", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_entity_1.Client),
    (0, typeorm_1.ManyToOne)(() => client_entity_1.Client, client => client.saving_accounts, { nullable: false }),
    __metadata("design:type", client_entity_1.Client)
], SavingAccount.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => [payment_account_entity_1.PaymentAccount]),
    (0, typeorm_1.OneToMany)(() => payment_account_entity_1.PaymentAccount, payment => payment.saving_accounts, { nullable: false }),
    __metadata("design:type", Array)
], SavingAccount.prototype, "payments", void 0);
exports.SavingAccount = SavingAccount = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], SavingAccount);
//# sourceMappingURL=saving-account.entity.js.map