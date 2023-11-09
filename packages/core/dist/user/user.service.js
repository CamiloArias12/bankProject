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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const enum_type_1 = require("./dto/enum-type");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findAll() {
        console.log("Obtener afiliados");
        return this.userRepository.find();
    }
    async findOne(identification) {
        return await this.userRepository.findOne({ where: { identification: identification } });
    }
    async authentication(identification, password) {
        const query = await this.userRepository.findOne({ where: { identification: identification, password: password }, relations: { client: true, employee: true } });
        if (query) {
            return { identification: query.identification, role: query.client ? enum_type_1.EnumUser.CLIENT : enum_type_1.EnumUser.EMPLOYEE };
        }
    }
    async update(identification, input) {
        try {
            await this.userRepository.update({ identification: identification }, { ...input });
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async delete(identification) {
        try {
            await this.userRepository.delete(identification);
            return true;
        }
        catch (e) {
            return false;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserService);
//# sourceMappingURL=user.service.js.map