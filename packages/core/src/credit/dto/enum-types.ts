import { Field, ObjectType } from "@nestjs/graphql";

export enum StateCredit {
   APROBADO="Aprobado",
   CURSO="En curso",
   FINALIZADO="Finalizado",
   REFINANCIADO="Refinanciado",
   MORA="En mora"

}

