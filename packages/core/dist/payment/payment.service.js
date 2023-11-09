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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const payment_cdt_entity_1 = require("./entities/payment-cdt.entity");
const payment_credit_entity_1 = require("./entities/payment-credit.entity");
const payment_account_entity_1 = require("./entities/payment-account.entity");
const credit_service_1 = require("../credit/credit.service");
const cdt_service_1 = require("../cdt/cdt.service");
const saving_account_service_1 = require("../saving-account/saving-account.service");
const installments_service_1 = require("../credit/installments/installments.service");
const enum_types_1 = require("../credit/dto/enum-types");
const enum_types_2 = require("../credit/installments/dto/enum-types");
let PaymentService = class PaymentService {
    constructor(paymentAccountRepository, paymentCreditRepository, paymentCdtRepository, creditService, cdtService, installmentService, savingAccountService) {
        this.paymentAccountRepository = paymentAccountRepository;
        this.paymentCreditRepository = paymentCreditRepository;
        this.paymentCdtRepository = paymentCdtRepository;
        this.creditService = creditService;
        this.cdtService = cdtService;
        this.installmentService = installmentService;
        this.savingAccountService = savingAccountService;
    }
    async createPaymentCdt(data) {
        try {
            const cdt = await this.cdtService.findOne(data.id);
            const paymentCdt = new payment_cdt_entity_1.PaymentCdt();
            paymentCdt.value = data.value;
            paymentCdt.date = new Date();
            paymentCdt.cdt = cdt;
            await this.paymentCdtRepository.save(paymentCdt);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async createPaymentCredit(data) {
        try {
            const installment = await this.installmentService.finOneByCreditAndNumberInstallment(data.id, data.credit);
            const paymentCredit = new payment_credit_entity_1.PaymentCredit();
            if (data.credit === 1) {
                await this.creditService.updateState(data.id, enum_types_1.StateCredit.CURSO);
            }
            await this.installmentService.updateState(data.credit, data.id, enum_types_2.StateInstallment.PAGADA);
            paymentCredit.value = installment.totalPayment;
            paymentCredit.installment = installment;
            paymentCredit.date = new Date();
            await this.paymentCreditRepository.save(paymentCredit);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async createPaymentAccount(data) {
        try {
            const savingAccount = await this.savingAccountService.findOne(data.id);
            const paymentAccount = new payment_account_entity_1.PaymentAccount();
            paymentAccount.value = data.value;
            paymentAccount.date = new Date();
            paymentAccount.saving_accounts = savingAccount;
            await this.paymentAccountRepository.save(paymentAccount);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async findAllPaymentCdt() {
        return await this.paymentCdtRepository.find();
    }
    async findAllPaymentCredit() {
        return await this.paymentCreditRepository.find();
    }
    async findAllPaymentAccount() {
        return await this.paymentAccountRepository.find();
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(payment_account_entity_1.PaymentAccount)),
    __param(1, (0, typeorm_2.InjectRepository)(payment_credit_entity_1.PaymentCredit)),
    __param(2, (0, typeorm_2.InjectRepository)(payment_cdt_entity_1.PaymentCdt)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _c : Object, credit_service_1.CreditService,
        cdt_service_1.CdtService,
        installments_service_1.InstallmentsService,
        saving_account_service_1.SavingAccountService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map