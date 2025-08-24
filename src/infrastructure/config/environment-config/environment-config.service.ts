import { Injectable } from '@nestjs/common';
import { IEnvironmentConfig } from 'src/domain/config/environment.interface';

@Injectable()
export class EnvironmentConfigService implements IEnvironmentConfig {
  getDatabaseUrl(): string {
    const DATABASE_URL = process.env.DATABASE_URL;
    if (!DATABASE_URL)
      throw new Error(
        'DATABASE_URL is not defined in your enviroment variables.',
      );
    return DATABASE_URL;
  }
}
