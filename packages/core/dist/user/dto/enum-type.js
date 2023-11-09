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
exports.Auth = exports.EnumUser = exports.Studies = exports.HousingType = exports.Gender = exports.CivilStatus = exports.TypeIdentification = void 0;
const graphql_1 = require("@nestjs/graphql");
var TypeIdentification;
(function (TypeIdentification) {
    TypeIdentification["CEDULA_DE_CIUDADANIA"] = "C\u00E9dula de ciudadania";
    TypeIdentification["TARJETA_DE_EXTRANJERIA"] = "C\u00E9dula de extranjeria";
})(TypeIdentification || (exports.TypeIdentification = TypeIdentification = {}));
var CivilStatus;
(function (CivilStatus) {
    CivilStatus["SOLTERO_A"] = "Soltero(a)";
    CivilStatus["CASADO_A"] = "Casado(a)";
    CivilStatus["LIBRE"] = "Libre";
    CivilStatus["OTRO"] = "Otro";
    CivilStatus["MUJER_CABEZA_FAMILIA"] = "Mujer cabeza familia";
})(CivilStatus || (exports.CivilStatus = CivilStatus = {}));
var Gender;
(function (Gender) {
    Gender["MASCULINO"] = "Masculino";
    Gender["FEMENINO"] = "Femenino";
})(Gender || (exports.Gender = Gender = {}));
var HousingType;
(function (HousingType) {
    HousingType["PROPIA"] = "Propia";
    HousingType["ARRENDADA"] = "Arrendada";
    HousingType["FAMILIAR"] = "Familiar";
    HousingType["OTRO"] = "Otro";
})(HousingType || (exports.HousingType = HousingType = {}));
var Studies;
(function (Studies) {
    Studies["PRIMARIA"] = "Primaria";
    Studies["SECUNDARIA"] = "Secundaria";
    Studies["TECNOLOGIA"] = "Tecnologia";
    Studies["UNIVESITARIA"] = "Universitaria";
    Studies["POSGRADO"] = "Posgrado";
})(Studies || (exports.Studies = Studies = {}));
var EnumUser;
(function (EnumUser) {
    EnumUser["CLIENT"] = "Cliente";
    EnumUser["EMPLOYEE"] = "Empleado";
})(EnumUser || (exports.EnumUser = EnumUser = {}));
let Auth = class Auth {
};
exports.Auth = Auth;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Auth.prototype, "identification", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Auth.prototype, "role", void 0);
exports.Auth = Auth = __decorate([
    (0, graphql_1.ObjectType)()
], Auth);
//# sourceMappingURL=enum-type.js.map