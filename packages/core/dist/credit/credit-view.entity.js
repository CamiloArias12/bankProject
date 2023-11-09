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
exports.ViewCredit = void 0;
const typeorm_1 = require("typeorm");
const credit_entity_1 = require("./credit.entity");
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../user/user.entity");
const client_entity_1 = require("../user/client/client.entity");
let ViewCredit = class ViewCredit {
};
exports.ViewCredit = ViewCredit;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], ViewCredit.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], ViewCredit.prototype, "identification", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], ViewCredit.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], ViewCredit.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], ViewCredit.prototype, "creditValue", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Number)
], ViewCredit.prototype, "interest", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", String)
], ViewCredit.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.ViewColumn)(),
    __metadata("design:type", Date)
], ViewCredit.prototype, "startDate", void 0);
exports.ViewCredit = ViewCredit = __decorate([
    (0, typeorm_1.ViewEntity)({
        expression: (dataSource) => dataSource
            .createQueryBuilder()
            .select("user.identification", "identification")
            .addSelect("user.name", "name")
            .addSelect("user.lastName", "lastName")
            .addSelect("credit.id", "id")
            .addSelect("credit.startDate", "startDate")
            .addSelect("credit.creditValue", "creditValue")
            .addSelect("credit.interest", "interest")
            .addSelect("credit.state", "state")
            .from(credit_entity_1.Credit, "credit")
            .leftJoin(client_entity_1.Client, "client", "credit.clientIdClient= client.idClient")
            .leftJoin(user_entity_1.User, "user", "client.idClient= user.identification")
    }),
    (0, graphql_1.ObjectType)()
], ViewCredit);
//# sourceMappingURL=credit-view.entity.js.map