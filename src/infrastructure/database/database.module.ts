import { Module } from '@nestjs/common';
import { DB_CONNECTION } from './database.constants';
import { IEnvironmentConfig } from 'src/domain/config/environment.interface';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { drizzle } from 'drizzle-orm/mysql2';
import { createPool } from 'mysql2/promise';

@Module({
  imports: [EnvironmentConfigModule],
  providers: [
    {
      provide: DB_CONNECTION,
      inject: [IEnvironmentConfig],
      useFactory: (configService: IEnvironmentConfig) => {
        const pool = createPool({
          uri: configService.getDatabaseUrl(),
        });
        return drizzle(pool);
      },
    },
  ],

  exports: [DB_CONNECTION],
})
export class DatabaseModule {}
