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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdtResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const cdt_service_1 = require("./cdt.service");
const cdt_entity_1 = require("./entities/cdt.entity");
const create_cdt_input_1 = require("./dto/create-cdt.input");
const cdt_view_entity_1 = require("./cdt-view.entity");
let CdtResolver = class CdtResolver {
    constructor(cdtService) {
        this.cdtService = cdtService;
    }
    async createCdt(createCdtInput) {
        return this.cdtService.create(createCdtInput);
    }
    async findAllCdt() {
        return await this.cdtService.findAll();
    }
    async findAllCdtByClient(identification) {
        return await this.cdtService.findAllByClient(identification);
    }
    async findOneCdt(id) {
        return this.cdtService.findOne(id);
    }
    updateCdt(inputUser, id) {
        return this.cdtService.update(id, inputUser);
    }
    async deleteCdt(id) {
        return this.cdtService.delete(id);
    }
};
exports.CdtResolver = CdtResolver;
__decorate([
    (0, graphql_1.Mutation)(() => cdt_entity_1.Cdt),
    __param(0, (0, graphql_1.Args)("createCdtInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cdt_input_1.CreateCdtInput]),
    __metadata("design:returntype", Promise)
], CdtResolver.prototype, "createCdt", null);
__decorate([
    (0, graphql_1.Query)(() => [cdt_view_entity_1.ViewCdt]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CdtResolver.prototype, "findAllCdt", null);
__decorate([
    (0, graphql_1.Query)(() => [cdt_view_entity_1.ViewCdt]),
    __param(0, (0, graphql_1.Args)("identification")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CdtResolver.prototype, "findAllCdtByClient", null);
__decorate([
    (0, graphql_1.Query)(() => cdt_entity_1.Cdt),
    __param(0, (0, graphql_1.Args)("id", { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CdtResolver.prototype, "findOneCdt", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)("inputCdt")),
    __param(1, (0, graphql_1.Args)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cdt_input_1.CreateCdtInput, Number]),
    __metadata("design:returntype", void 0)
], CdtResolver.prototype, "updateCdt", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Args)("id", { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CdtResolver.prototype, "deleteCdt", null);
exports.CdtResolver = CdtResolver = __decorate([
    (0, graphql_1.Resolver)(() => cdt_entity_1.Cdt),
    __metadata("design:paramtypes", [cdt_service_1.CdtService])
], CdtResolver);
//# sourceMappingURL=cdt.resolver.js.map