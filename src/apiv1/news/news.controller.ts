import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '../../auth/auth.guard';
import { NewsService } from '../../services/news/news.service';
import { BaseContext } from '../../interface/base-context.interface';
import { news } from '../../db/coronatracker/entities/news';

@ApiTags('News')
@Controller('v1/news')
export class NewsController {
    constructor(private readonly newsService: NewsService) { }

    @Get()
    // @UseGuards(AuthGuard)
    @ApiOperation({ summary: 'Fetch and Search News' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.' })
    @ApiForbiddenResponse({ description: 'Forbidden.' })
    async searchCountryCode(): Promise<BaseContext<news[]>> {
        const data = await this.newsService.fetchNews();
        return {
            success: true,
            code: 200,
            businessCode: 0,
            message: 'Success Search News',
            content: data,
        };
    }
}
