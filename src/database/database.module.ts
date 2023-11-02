import { DynamicModule, Module } from "@nestjs/common";
import { DatabaseService } from "./database.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [],
  providers: [DatabaseService],
})
export class DatabaseModule {
  constructor() {}
  static async forRootAsync(): Promise<DynamicModule> {
    return TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "mysql",
        host: configService.get("DB_HOST"),
        port: configService.get("DB_PORT"),
        username: configService.get("DB_USERNAME"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB_DATABASE"),
        entities: [],
        synchronize: true,
      }),
      inject: [ConfigService],
    });
  }
}
