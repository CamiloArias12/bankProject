"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditModule = void 0;
const common_1 = require("@nestjs/common");
const credit_service_1 = require("./credit.service");
const credit_resolver_1 = require("./credit.resolver");
const installments_service_1 = require("./installments/installments.service");
const installments_resolver_1 = require("./installments/installments.resolver");
const user_module_1 = require("../user/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const credit_entity_1 = require("./credit.entity");
const installment_entity_1 = require("./installments/installment.entity");
let CreditModule = class CreditModule {
};
exports.CreditModule = CreditModule;
exports.CreditModule = CreditModule = __decorate([
    (0, common_1.Module)({
        providers: [credit_resolver_1.CreditResolver, credit_service_1.CreditService, installments_service_1.InstallmentsService, installments_resolver_1.InstallmentResolver],
        imports: [typeorm_1.TypeOrmModule.forFeature([credit_entity_1.Credit, installment_entity_1.Installment]), user_module_1.UserModule],
        exports: [installments_service_1.InstallmentsService, credit_service_1.CreditService]
    })
], CreditModule);
//# sourceMappingURL=credit.module.js.map