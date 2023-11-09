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
exports.ClientResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_entity_1 = require("./client.entity");
const client_service_1 = require("./client.service");
const create_user_inupt_1 = require("../dto/create-user-inupt");
let ClientResolver = class ClientResolver {
    constructor(clientService) {
        this.clientService = clientService;
    }
    async createClient(inputClient) {
        return await this.clientService.create(inputClient);
    }
    async allClient() {
        return await this.clientService.findAll();
    }
    async getClient(identification) {
        return await this.clientService.findOne(identification);
    }
};
exports.ClientResolver = ClientResolver;
__decorate([
    (0, graphql_1.Mutation)(() => client_entity_1.Client),
    __param(0, (0, graphql_1.Args)('inputClient')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_inupt_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "createClient", null);
__decorate([
    (0, graphql_1.Query)(() => [client_entity_1.Client]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "allClient", null);
__decorate([
    (0, graphql_1.Query)(() => client_entity_1.Client),
    __param(0, (0, graphql_1.Args)('identification')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClientResolver.prototype, "getClient", null);
exports.ClientResolver = ClientResolver = __decorate([
    (0, graphql_1.Resolver)(() => client_entity_1.Client),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ClientResolver);
//# sourceMappingURL=client.resolver.js.map