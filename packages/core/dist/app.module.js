"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const transaction_module_1 = require("./transaction/transaction.module");
const saving_account_module_1 = require("./saving-account/saving-account.module");
const cdt_module_1 = require("./cdt/cdt.module");
const credit_module_1 = require("./credit/credit.module");
const branch_office_module_1 = require("./branch-office/branch-office.module");
const database_module_1 = require("./database/database.module");
const config_1 = require("@nestjs/config");
const path = require("path");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const user_module_1 = require("./user/user.module");
const scalar_type_1 = require("./scalar-type");
const payment_module_1 = require("./payment/payment.module");
console.log(path.join(__dirname, '..', '..', '..', '.env'));
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: path.join(__dirname, '..', '..', '..', '.env'),
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: true
            }),
            user_module_1.UserModule,
            branch_office_module_1.BranchOfficeModule,
            credit_module_1.CreditModule,
            cdt_module_1.CdtModule,
            saving_account_module_1.SavingAccountModule,
            transaction_module_1.TransactionModule,
            database_module_1.DatabaseModule.forRootAsync(),
            payment_module_1.PaymentModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, scalar_type_1.DateScalar],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map