"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdtModule = void 0;
const common_1 = require("@nestjs/common");
const cdt_service_1 = require("./cdt.service");
const cdt_resolver_1 = require("./cdt.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const cdt_entity_1 = require("./entities/cdt.entity");
const user_module_1 = require("../user/user.module");
let CdtModule = class CdtModule {
};
exports.CdtModule = CdtModule;
exports.CdtModule = CdtModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cdt_entity_1.Cdt]), user_module_1.UserModule],
        providers: [cdt_resolver_1.CdtResolver, cdt_service_1.CdtService],
        exports: [cdt_service_1.CdtService]
    })
], CdtModule);
//# sourceMappingURL=cdt.module.js.map