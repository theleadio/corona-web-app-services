import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';
import { NewsService } from './news/news.service';
import { news } from '../db/coronatracker/entities/news';

@Global()
@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forFeature([
            news,
        ]),
    ],
    providers: [
        AuthGuard,
        AuthService,
        NewsService,
    ],
    exports: [
        AuthGuard,
        AuthService,
        NewsService,
    ],
})
export class ServiceModule { }
