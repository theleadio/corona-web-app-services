import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './config/config.service';
import { TypeOrmConfigService } from './type-orm-config/type-orm-config.service';
import { EventsModule } from './events/events.module';
import { RedisClientModule } from './redis/redis-client/redis-client.module';
import { Apiv1Module } from './apiv1/apiv1.module';
import { ServiceModule } from './services/service.module';
import { Apiv2Module } from './apiv2/apiv2.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule,
    // 如果要使用 TypeOrm 連接資料庫
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [
        // 宣告哪個provider或是service需要被注入
        ConfigService,
      ],
      useClass: TypeOrmConfigService,
    }),
    // if use Redis open
    RedisClientModule,
    EventsModule,
    ServiceModule,
    Apiv1Module,
    Apiv2Module,
  ],
  controllers: [AppController],
  providers: [AppService, TypeOrmConfigService],
})
export class AppModule { }
