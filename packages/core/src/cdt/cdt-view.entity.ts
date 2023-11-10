import { DataSource, ViewColumn, ViewEntity } from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/user.entity";
import { Client } from "src/user/client/client.entity";
import { Cdt } from "./entities/cdt.entity";

@ViewEntity({
  expression: (dataSource: DataSource) =>
    dataSource
      .createQueryBuilder()
      .select("user.identification", "identification")
      .addSelect("user.name", "name")
      .addSelect("user.lastName", "lastName")
      .addSelect("cdt.id", "id")
      .addSelect("cdt.startDate", "startDate")
      .addSelect("cdt.depositAmount", "depositAmount")
      .addSelect("cdt.interestRate", "interestRate")
      .addSelect("cdt.maturityDate", "maturityDate")
      .from(Cdt, "cdt")
      .leftJoin(Client, "client", "cdt.clientIdClient= client.idClient")
      .leftJoin(User, "user", "client.idClient= user.identification"),
})
@ObjectType()
export class ViewCdt {
  @Field()
  @ViewColumn()
  id: number;

  @Field()
  @ViewColumn()
  identification: number;

  @Field()
  @ViewColumn()
  lastName: string;

  @Field()
  @ViewColumn()
  name: string;

  @Field()
  @ViewColumn()
  depositAmount: number;

  @Field()
  @ViewColumn()
  interestRate: number;

  @Field()
  @ViewColumn()
  maturityDate: Date;

  @Field()
  @ViewColumn()
  startDate: Date;
}
