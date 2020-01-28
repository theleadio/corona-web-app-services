import { Module } from '@nestjs/common';
import { UserV2Controller } from './user/user.controller';

@Module({
  controllers: [UserV2Controller],
})
export class Apiv2Module {}
