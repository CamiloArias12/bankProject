import { Role } from "./user/types";

export enum MenuSidebar {
  main = 'main',
  branches= 'branches',
  users= 'users',
  cdt= 'cdt',
  credits='credit',
  saving = 'saving',
  thirds= 'thirds'
}

export const SideBarModules = [
  {
    name: 'Inicio',
    href: '/dashboard',
    menu: MenuSidebar.main,
    role:[Role.EMPLOYEE ,Role.CLIENT]
  },

  {
    name: 'Sucursales',
    href: '/dashboard/branches',
    menu: MenuSidebar.branches,
    role:[Role.EMPLOYEE]

  },
  {
    name: 'Usuarios',
    href: '/dashboard/users',
    menu: MenuSidebar.thirds,
    role:[Role.EMPLOYEE]
  },
  {
    name: 'Cdt',
    href: '/dashboard/cdts',
    menu: MenuSidebar.cdt,
    role:[Role.EMPLOYEE,Role.CLIENT]
  },
  {
    name: 'Creditos',
    href: '/dashboard/credit',
    menu: MenuSidebar.credits,
    role:[Role.EMPLOYEE,Role.CLIENT]
  },
   {
    name: 'Cuentas de ahorro',
    href: '/dashboard/saving',
    menu: MenuSidebar.saving,
    role:[Role.EMPLOYEE,Role.CLIENT]
  },
  {  
   name: 'Pagos',
   href: '/dashboard/payment',
   menu: MenuSidebar.users,
   role:[Role.EMPLOYEE]
  },


];
