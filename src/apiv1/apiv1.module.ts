import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisClientService } from '../redis/redis-client/redis-client.service';
import { NewsController } from './news/news.controller';

@Module({
    controllers: [
        NewsController,
    ],
})
export class Apiv1Module { }
