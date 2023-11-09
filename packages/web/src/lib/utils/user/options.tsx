export enum TypeAccountEnum {
  EMPLOYEE= 'Empleado',
  CLIENT = 'Cliente',
}

export const optionsUser = [
  {
    id: 1,
    name: TypeAccountEnum.EMPLOYEE,
  },
  {
    id: 2,
    name: TypeAccountEnum.CLIENT,
  },
];
