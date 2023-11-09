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
exports.ViewSaving = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../user/user.entity");
const client_entity_1 = require("../user/client/client.entity");
const saving_account_entity_1 = require("./entities/saving-account.entity");
let ViewSaving = class ViewSaving {
};
exports.ViewSaving = ViewSaving;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], ViewSaving.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], ViewSaving.prototype, "identification", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], ViewSaving.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], ViewSaving.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], ViewSaving.prototype, "interestRate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Date)
], ViewSaving.prototype, "openingDate", void 0);
exports.ViewSaving = ViewSaving = __decorate([
    (0, typeorm_1.ViewEntity)({
        expression: (dataSource) => dataSource
            .createQueryBuilder()
            .select("user.identification", "identification")
            .addSelect("user.name", "name")
            .addSelect("user.lastName", "lastName")
            .addSelect("saving.id", "id")
            .addSelect("saving.openingDate", "openingDate")
            .addSelect("saving.interestRate", "interestRate")
            .from(saving_account_entity_1.SavingAccount, "saving")
            .leftJoin(client_entity_1.Client, "client", "saving.clientIdClient= client.idClient")
            .leftJoin(user_entity_1.User, "user", "client.idClient= user.identification")
    }),
    (0, graphql_1.ObjectType)()
], ViewSaving);
//# sourceMappingURL=saving-view.entity.js.map