import { CustomConfigInterface } from "@core/config/config.interface";
import { Injectable } from "@nestjs/common";
import { ConfigService, Path } from "@nestjs/config";

@Injectable()
export class CustomConfigService {
  constructor(private readonly nestConfigService: ConfigService) {}

  get<T>(path: Path<CustomConfigInterface>): T {
    const value = this.nestConfigService.get<T>(path);

    if (value === undefined) {
      throw new Error(
        `Configuration value for path "${String(path)}" is undefined`,
      );
    }

    return value;
  }
}
