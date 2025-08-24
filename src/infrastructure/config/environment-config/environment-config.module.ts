import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './environment-config.service';
import { IEnvironmentConfig } from 'src/domain/config/environment.interface';

@Module({
  providers: [
    EnvironmentConfigService,
    {
      provide: IEnvironmentConfig,
      useClass: EnvironmentConfigService,
    },
  ],
  exports: [IEnvironmentConfig],
})
export class EnvironmentConfigModule {}
