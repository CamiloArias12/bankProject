export declare enum TypeIdentification {
    CEDULA_DE_CIUDADANIA = "C\u00E9dula de ciudadania",
    TARJETA_DE_EXTRANJERIA = "C\u00E9dula de extranjeria"
}
export declare enum CivilStatus {
    SOLTERO_A = "Soltero(a)",
    CASADO_A = "Casado(a)",
    LIBRE = "Libre",
    OTRO = "Otro",
    MUJER_CABEZA_FAMILIA = "Mujer cabeza familia"
}
export declare enum Gender {
    MASCULINO = "Masculino",
    FEMENINO = "Femenino"
}
export declare enum HousingType {
    PROPIA = "Propia",
    ARRENDADA = "Arrendada",
    FAMILIAR = "Familiar",
    OTRO = "Otro"
}
export declare enum Studies {
    PRIMARIA = "Primaria",
    SECUNDARIA = "Secundaria",
    TECNOLOGIA = "Tecnologia",
    UNIVESITARIA = "Universitaria",
    POSGRADO = "Posgrado"
}
export declare enum EnumUser {
    CLIENT = "Cliente",
    EMPLOYEE = "Empleado"
}
export declare class Auth {
    identification: number;
    role: EnumUser;
}
