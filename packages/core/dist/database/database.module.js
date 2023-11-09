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
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const branch_office_entity_1 = require("../branch-office/entities/branch-office.entity");
const cdt_entity_1 = require("../cdt/entities/cdt.entity");
const saving_account_entity_1 = require("../saving-account/entities/saving-account.entity");
const transaction_entity_1 = require("../transaction/entities/transaction.entity");
const credit_entity_1 = require("../credit/credit.entity");
const client_entity_1 = require("../user/client/client.entity");
const employee_entity_1 = require("../user/employee/employee.entity");
const user_entity_1 = require("../user/user.entity");
const installment_entity_1 = require("../credit/installments/installment.entity");
const credit_view_entity_1 = require("../credit/credit-view.entity");
const cdt_view_entity_1 = require("../cdt/cdt-view.entity");
const saving_view_entity_1 = require("../saving-account/saving-view.entity");
const payment_account_entity_1 = require("../payment/entities/payment-account.entity");
const payment_cdt_entity_1 = require("../payment/entities/payment-cdt.entity");
const payment_credit_entity_1 = require("../payment/entities/payment-credit.entity");
let DatabaseModule = class DatabaseModule {
    constructor() { }
    static async forRootAsync() {
        return typeorm_1.TypeOrmModule.forRootAsync({
            imports: [config_1.ConfigModule],
            useFactory: (configService) => ({
                type: "mysql",
                host: configService.get("DB_HOST"),
                port: configService.get("DB_PORT"),
                username: configService.get("DB_USERNAME"),
                password: configService.get("DB_PASSWORD"),
                database: configService.get("DB_DATABASE"),
                entities: [branch_office_entity_1.BranchOffice, cdt_entity_1.Cdt, saving_account_entity_1.SavingAccount, credit_entity_1.Credit, transaction_entity_1.Transaction, client_entity_1.Client, employee_entity_1.Employee, user_entity_1.User, installment_entity_1.Installment, credit_view_entity_1.ViewCredit, cdt_view_entity_1.ViewCdt, saving_view_entity_1.ViewSaving, payment_account_entity_1.PaymentAccount, payment_cdt_entity_1.PaymentCdt, payment_credit_entity_1.PaymentCredit],
                synchronize: true,
            }),
            inject: [config_1.ConfigService],
        });
    }
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [],
    }),
    __metadata("design:paramtypes", [])
], DatabaseModule);
//# sourceMappingURL=database.module.js.map