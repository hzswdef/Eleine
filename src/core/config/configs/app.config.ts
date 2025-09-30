import { CustomConfigInterface } from "@core/config/config.interface";
import { registerAs } from "@nestjs/config";

export default registerAs(
  "app",
  () =>
    ({
      environment: process.env.ENVIRONMENT || "DEVELOPMENT",
      port: parseInt(process.env.PORT || "3000", 10),
    }) as CustomConfigInterface["app"],
);
