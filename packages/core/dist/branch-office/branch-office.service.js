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
exports.BranchOfficeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const branch_office_entity_1 = require("./entities/branch-office.entity");
const typeorm_2 = require("typeorm");
let BranchOfficeService = class BranchOfficeService {
    constructor(branchRepository) {
        this.branchRepository = branchRepository;
    }
    async create(createBranchOfficeInput) {
        return await this.branchRepository.save(createBranchOfficeInput);
    }
    findAll() {
        return this.branchRepository.find();
    }
    findOne(id) {
        return this.branchRepository.findOne({ where: { id: id } });
    }
    async update(id, inputBranch) {
        try {
            await this.branchRepository.update({ id: id }, { ...inputBranch });
            return true;
        }
        catch (e) {
            return false;
        }
    }
    async delete(code) {
        try {
            await this.branchRepository.delete(code);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
};
exports.BranchOfficeService = BranchOfficeService;
exports.BranchOfficeService = BranchOfficeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(branch_office_entity_1.BranchOffice)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], BranchOfficeService);
//# sourceMappingURL=branch-office.service.js.map