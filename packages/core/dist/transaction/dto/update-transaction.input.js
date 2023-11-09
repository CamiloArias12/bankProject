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
exports.UpdateTransactionInput = void 0;
const create_transaction_input_1 = require("./create-transaction.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateTransactionInput = class UpdateTransactionInput extends (0, graphql_1.PartialType)(create_transaction_input_1.CreateTransactionInput) {
};
exports.UpdateTransactionInput = UpdateTransactionInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateTransactionInput.prototype, "id", void 0);
exports.UpdateTransactionInput = UpdateTransactionInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateTransactionInput);
//# sourceMappingURL=update-transaction.input.js.map