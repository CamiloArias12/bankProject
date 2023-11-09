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
exports.CreditService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const credit_entity_1 = require("./credit.entity");
const date_fns_1 = require("date-fns");
const enum_types_1 = require("./dto/enum-types");
const client_service_1 = require("../user/client/client.service");
const credit_view_entity_1 = require("./credit-view.entity");
const client_entity_1 = require("../user/client/client.entity");
const user_entity_1 = require("../user/user.entity");
let CreditService = class CreditService {
    constructor(creditRepository, clientService, dataSource) {
        this.creditRepository = creditRepository;
        this.clientService = clientService;
        this.dataSource = dataSource;
    }
    async create(data) {
        const client = await this.clientService.findOne(data.clientId);
        console.log(client);
        const credit = new credit_entity_1.Credit(data);
        credit.client = client;
        console.log(client);
        return await this.creditRepository.save(credit);
    }
    async updateState(id, state) {
        console.log(await this.creditRepository.update({ id: id }, { state: state }));
        return await this.findOne(id);
    }
    async findOne(id) {
        return this.creditRepository.findOne({ relations: {
                client: {
                    user: true
                },
                installments: true
            }, where: { id: id } });
    }
    async delete(id) {
        try {
            await this.creditRepository.delete(id);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async findAllByClient(identification) {
        const query = await this.dataSource
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
            .where("client.idClient= :idClient", { idClient: identification })
            .getRawMany();
        console.log(query);
        return query;
    }
    async findAll() {
        return await this.dataSource.manager.find(credit_view_entity_1.ViewCredit);
    }
    async isRefinance(id) {
        const query = await this.creditRepository.findOne({
            where: {
                id: id,
                state: enum_types_1.StateCredit.CURSO
            },
        });
        return query ? true : false;
    }
    async findAllCredit() {
        return this.creditRepository.find();
    }
    async amortizationTableGenerate(dateCredit, valueLoan, interest, installments) {
        const array = [];
        let loanPartial = valueLoan;
        const valueInstallment = this.pmt(valueLoan, ((interest * (12 / 100)) * 100), installments);
        for (let i = 0; i < installments; i++) {
            const interestValue = loanPartial * (0.014);
            const finalBalance = loanPartial - (valueInstallment - interestValue);
            array.push({ installmentNumber: i + 1, paymentDate: (0, date_fns_1.addMonths)(dateCredit, i), initialBalance: Math.round(loanPartial),
                scheduledPayment: Math.round(valueInstallment), extraPayment: 0, totalPayment: Math.round(valueInstallment),
                capital: Math.round(valueInstallment - interestValue),
                interest: Math.round(interestValue), finalBalance: Math.round(finalBalance) });
            loanPartial = loanPartial - (valueInstallment - interestValue);
        }
        return array;
    }
    pmt(principal, interestRate, numberOfPayments) {
        const monthlyInterestRate = interestRate / (12 * 100);
        console.log(monthlyInterestRate);
        const presentValueFactor = Math.pow(1 + monthlyInterestRate, numberOfPayments);
        console.log(presentValueFactor);
        return principal * monthlyInterestRate * presentValueFactor / (presentValueFactor - 1);
    }
};
exports.CreditService = CreditService;
exports.CreditService = CreditService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(credit_entity_1.Credit)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, client_service_1.ClientService, typeof (_b = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _b : Object])
], CreditService);
//# sourceMappingURL=credit.service.js.map