import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { news } from '../../db/coronatracker/entities/news';

@Injectable()
export class NewsService {
    private readonly logger = new Logger(NewsService.name);

    constructor(
        @InjectRepository(news)
        private readonly newsRepository: Repository<news>,
    ) { }

    async fetchNews(): Promise<news[]> {
        this.logger.debug('start search news');
        return await this.newsRepository.createQueryBuilder('news')
            .orderBy({
                'news.published': 'DESC',
            })
            .getMany();
    }
}
