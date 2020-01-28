import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';

@Module({
    providers: [AuthService, AuthGuard, EventsGateway],
  })
export class EventsModule {}
