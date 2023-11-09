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
exports.Client = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user.entity");
const credit_entity_1 = require("../../credit/credit.entity");
const cdt_entity_1 = require("../../cdt/entities/cdt.entity");
const saving_account_entity_1 = require("../../saving-account/entities/saving-account.entity");
let Client = class Client {
};
exports.Client = Client;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], Client.prototype, "idClient", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.User),
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, user => user.client, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'idClient' }),
    __metadata("design:type", user_entity_1.User)
], Client.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [credit_entity_1.Credit]),
    (0, typeorm_1.OneToMany)(() => credit_entity_1.Credit, credit => credit.client),
    __metadata("design:type", Array)
], Client.prototype, "credits", void 0);
__decorate([
    (0, graphql_1.Field)(() => [cdt_entity_1.Cdt]),
    (0, typeorm_1.OneToMany)(() => cdt_entity_1.Cdt, cdt => cdt.client),
    __metadata("design:type", Array)
], Client.prototype, "cdts", void 0);
__decorate([
    (0, graphql_1.Field)(() => [saving_account_entity_1.SavingAccount]),
    (0, typeorm_1.OneToMany)(() => saving_account_entity_1.SavingAccount, saving_account => saving_account.client),
    __metadata("design:type", Array)
], Client.prototype, "saving_accounts", void 0);
exports.Client = Client = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Client);
//# sourceMappingURL=client.entity.js.map