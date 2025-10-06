import { CustomConfigInterface } from "@core/config/config.interface";
import { registerAs } from "@nestjs/config";

export default registerAs(
  "app",
  () =>
    ({
      environment: process.env.ENVIRONMENT || "DEVELOPMENT",
      port: parseInt(process.env.PORT || "3000", 10),
      corsOrigins: (() => {
        const cors = process.env.CORS_OPTIONS;
        if (!cors) {
          return ["http://127.0.0.1:5173", "http://localhost:5173"];
        }

        if (cors.indexOf(",") !== -1) {
          return cors.split(",");
        }

        return cors;
      })(),
    }) as CustomConfigInterface["app"],
);
