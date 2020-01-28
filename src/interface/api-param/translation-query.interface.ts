import { LangCode } from '../../enum/lang-code';
import { ApiProperty } from '@nestjs/swagger';

export class TranslationQuery {
    @ApiProperty()
    langcode: LangCode;
    @ApiProperty()
    fromcontent: string;
}
