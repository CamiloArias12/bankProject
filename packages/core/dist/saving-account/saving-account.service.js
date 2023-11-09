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
exports.SavingAccountService = void 0;
const common_1 = require("@nestjs/common");
const saving_account_entity_1 = require("./entities/saving-account.entity");
const typeorm_1 = require("typeorm");
const client_service_1 = require("../user/client/client.service");
const typeorm_2 = require("@nestjs/typeorm");
const saving_view_entity_1 = require("./saving-view.entity");
const client_entity_1 = require("../user/client/client.entity");
const user_entity_1 = require("../user/user.entity");
let SavingAccountService = class SavingAccountService {
    constructor(saving_accountRepository, clientService, dataSource) {
        this.saving_accountRepository = saving_accountRepository;
        this.clientService = clientService;
        this.dataSource = dataSource;
    }
    async create(createSavingInput) {
        console.log();
        const client = await this.clientService.findOne(createSavingInput.clientId);
        const saving_account = new saving_account_entity_1.SavingAccount();
        saving_account.openingDate = createSavingInput.openingDate;
        saving_account.interestRate = createSavingInput.interestRate;
        saving_account.client = client;
        return this.saving_accountRepository.save(saving_account);
    }
    async findAll() {
        return await this.dataSource.manager.find(saving_view_entity_1.ViewSaving);
    }
    async findOne(id) {
        return await this.saving_accountRepository.findOne({ where: { id: id } });
    }
    async findAllByClient(identification) {
        return await this.dataSource
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
            .where("client.idClient= :idClient", { idClient: identification })
            .getRawMany();
    }
    update(id, updateSavingAccountInput) {
        return `This action updates a #${id} savingAccount`;
    }
    async delete(id) {
        try {
            await this.saving_accountRepository.delete(id);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
};
exports.SavingAccountService = SavingAccountService;
exports.SavingAccountService = SavingAccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(saving_account_entity_1.SavingAccount)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, client_service_1.ClientService, typeof (_b = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _b : Object])
], SavingAccountService);
//# sourceMappingURL=saving-account.service.js.map