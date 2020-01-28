import { Test, TestingModule } from '@nestjs/testing';
import { NewsController } from './news.controller';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockRepository } from '../../../test/mockRepository';
import { ConfigService } from '../../config/config.service';
import { AuthService } from '../../auth/auth.service';
import { NewsService } from '../../services/news/news.service';
import { news } from '../../db/coronatracker/entities/news';

describe('CountryCode Controller', () => {
  let controller: NewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConfigService,
        NewsService,
      ],
      controllers: [NewsController],
    }).compile();

    controller = module.get<NewsController>(NewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
