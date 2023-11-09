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
exports.Credit = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const installment_entity_1 = require("./installments/installment.entity");
const enum_types_1 = require("./dto/enum-types");
const client_entity_1 = require("../user/client/client.entity");
let Credit = class Credit {
    constructor(params) {
        Object.assign(this, params);
    }
};
exports.Credit = Credit;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Credit.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('double', { nullable: false }),
    __metadata("design:type", Number)
], Credit.prototype, "creditValue", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('double', { nullable: false }),
    __metadata("design:type", Number)
], Credit.prototype, "interest", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Credit.prototype, "startDate", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enum_types_1.StateCredit,
        nullable: false,
        default: enum_types_1.StateCredit.APROBADO
    }),
    __metadata("design:type", String)
], Credit.prototype, "state", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_entity_1.Client),
    (0, typeorm_1.ManyToOne)(() => client_entity_1.Client, client => client.credits, { nullable: false, onUpdate: 'CASCADE' }),
    __metadata("design:type", client_entity_1.Client)
], Credit.prototype, "client", void 0);
__decorate([
    (0, graphql_1.Field)(() => [installment_entity_1.Installment]),
    (0, typeorm_1.OneToMany)(() => installment_entity_1.Installment, (installment) => installment.credit, { nullable: false, cascade: ['insert', 'update', 'remove'] }),
    __metadata("design:type", Array)
], Credit.prototype, "installments", void 0);
exports.Credit = Credit = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Credit);
//# sourceMappingURL=credit.entity.js.map