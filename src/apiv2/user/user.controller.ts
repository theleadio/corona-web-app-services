import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('user')
@ApiBearerAuth()
@Controller('v2/user')
export class UserV2Controller {
    @Get()
    async find(): Promise<string> {
        return 'v2';
    }
}
