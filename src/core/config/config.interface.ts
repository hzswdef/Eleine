export interface CustomConfigInterface {
  app: {
    environment: "DEVELOPMENT" | "PRODUCTION";
    port: number;
  };
}
