import { CustomConfigService } from "@core/config/config.service";
import appConfig from "@core/config/configs/app.config";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.ENVIRONMENT === "DEVELOPMENT" ? ".env" : undefined,
      load: [appConfig],
    }),
  ],
  providers: [CustomConfigService],
  exports: [CustomConfigService],
})
export class CustomConfigModule {}
