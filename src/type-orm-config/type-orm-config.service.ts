import { Injectable, Logger } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';
import * as path from 'path';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {

    private readonly logger = new Logger(TypeOrmConfigService.name);
    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
      return {
        type: 'mysql',
        host: this.configService.dbHost,
        port: this.configService.dbPort,
        username: this.configService.dbUser,
        password: this.configService.dbPassword,
        database: this.configService.dbName,
        entities: [this.getEntities()],
        synchronize: this.configService.dbSYNC,
        logging: this.configService.dbLogging,
      };
    }

    private getEntities(): string {
      this.logger.log(this.configService.nodeENV, 'NODE_ENV');
      if (this.configService.isDev) {
        this.logger.log('isDev', 'GetEntities');
        return path.resolve('./', 'dist/db/coronatracker/entities/**/*{.ts,.js}');
      } else {
        this.logger.log('isNotDev', 'GetEntities');
        return path.resolve('./', 'dist/db/coronatracker/entities/**/*{.ts,.js}');
      }
    }
  }
