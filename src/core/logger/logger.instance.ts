import { createLogger, format, LoggerOptions, transports } from "winston";

const loggerConfig: LoggerOptions = {
  format: format.combine(
    format.colorize({ all: true }),
    format.simple(),
    format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
    format.printf(
      ({ timestamp, level, message }) =>
        `[${timestamp}] ${level.toUpperCase()}: ${message}`,
    ),
  ),
  transports: [new transports.Console({ level: "info" })],
};

export const loggerInstance = createLogger(loggerConfig);
