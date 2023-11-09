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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdtService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cdt_entity_1 = require("./entities/cdt.entity");
const typeorm_2 = require("typeorm");
const client_service_1 = require("../user/client/client.service");
const cdt_view_entity_1 = require("./cdt-view.entity");
const client_entity_1 = require("../user/client/client.entity");
const user_entity_1 = require("../user/user.entity");
let CdtService = class CdtService {
    constructor(cdtRepository, clientService, dataSource) {
        this.cdtRepository = cdtRepository;
        this.clientService = clientService;
        this.dataSource = dataSource;
    }
    async create(createCdtInput) {
        const client = await this.clientService.findOne(createCdtInput.clientId);
        const cdt = this.cdtRepository.create(createCdtInput);
        cdt.client = client;
        return this.cdtRepository.save(cdt);
    }
    async findAllByClient(identification) {
        const query = await this.dataSource
            .createQueryBuilder()
            .select("user.identification", "identification")
            .addSelect("user.name", "name")
            .addSelect("user.lastName", "lastName")
            .addSelect("cdt.id", "id")
            .addSelect("cdt.startDate", "startDate")
            .addSelect("cdt.depositAmount", "depositAmount")
            .addSelect("cdt.interestRate", "interestRate")
            .addSelect("cdt.maturityDate", "maturityDate")
            .from(cdt_entity_1.Cdt, "cdt")
            .leftJoin(client_entity_1.Client, "client", "cdt.clientIdClient= client.idClient")
            .leftJoin(user_entity_1.User, "user", "client.idClient= user.identification")
            .where("client.idClient= :idClient", { idClient: identification })
            .getRawMany();
        return query;
    }
    async findAll() {
        return await this.dataSource.manager.find(cdt_view_entity_1.ViewCdt);
    }
    async findOne(id) {
        return await this.cdtRepository.findOne({ where: { id: id } });
    }
    async update(id, updateCdtInput) {
        try {
            await this.cdtRepository.update({ id: id }, { depositAmount: updateCdtInput.depositAmount, maturityDate: updateCdtInput.maturityDate, interestRate: updateCdtInput.interestRate, startDate: updateCdtInput.startDate });
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async delete(id) {
        try {
            await this.cdtRepository.delete(id);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
};
exports.CdtService = CdtService;
exports.CdtService = CdtService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cdt_entity_1.Cdt)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, client_service_1.ClientService, typeof (_b = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _b : Object])
], CdtService);
//# sourceMappingURL=cdt.service.js.map