import { CustomConfigService } from "@core/config/config.service";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { SwaggerTheme, SwaggerThemeNameEnum } from "swagger-themes";

import { AppModule } from "@/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(CustomConfigService);

  app.setGlobalPrefix("/api/v1");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // Development environment things.
  if (configService.get("app.environment") === "DEVELOPMENT") {
    // Setup Swagger.
    const config = new DocumentBuilder()
      .setTitle("Eleine API")
      .setDescription(
        "<div align='center'><img src='https://i.pinimg.com/736x/49/f1/80/49f18047adca07955f8f3929de06ddff.jpg' width='144' alt='vitalik'></div>",
      )
      .setVersion("v1.0")
      .addSecurity("bearer", {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "access-token",
      })
      .build();

    const documentFactory = () => SwaggerModule.createDocument(app, config);
    const theme = new SwaggerTheme();
    SwaggerModule.setup("/api/doc", app, documentFactory, {
      customCss:
        theme.getBuffer(SwaggerThemeNameEnum.DARK) +
        ".swagger-ui .topbar { display: none }",
    });
  }

  app.enableCors({
    origin: configService.get("app.corsOrigins") || [],
    methods: "GET,HEAD,PATCH,POST,DELETE,OPTIONS",
    credentials: false,
  });

  await app.listen(configService.get("app.port"));
}

bootstrap();
