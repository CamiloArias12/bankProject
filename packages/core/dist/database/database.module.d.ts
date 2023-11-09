import { DynamicModule } from "@nestjs/common";
export declare class DatabaseModule {
    constructor();
    static forRootAsync(): Promise<DynamicModule>;
}
