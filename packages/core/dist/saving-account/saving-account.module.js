"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccountModule = void 0;
const common_1 = require("@nestjs/common");
const saving_account_service_1 = require("./saving-account.service");
const saving_account_resolver_1 = require("./saving-account.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const saving_account_entity_1 = require("./entities/saving-account.entity");
const user_module_1 = require("../user/user.module");
let SavingAccountModule = class SavingAccountModule {
};
exports.SavingAccountModule = SavingAccountModule;
exports.SavingAccountModule = SavingAccountModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([saving_account_entity_1.SavingAccount]), user_module_1.UserModule],
        providers: [saving_account_resolver_1.SavingAccountResolver, saving_account_service_1.SavingAccountService],
        exports: [saving_account_service_1.SavingAccountService]
    })
], SavingAccountModule);
//# sourceMappingURL=saving-account.module.js.map