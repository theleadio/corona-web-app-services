import { CanActivate, ExecutionContext, Injectable, Logger, Global } from '@nestjs/common';
import { Observable } from 'rxjs';
import { WsException } from '@nestjs/websockets';
import { AuthService } from './auth.service';
import { UserId } from '../interface/user-id.interface';
import { Socket } from 'socket.io';

@Injectable()
export class AuthGuard implements CanActivate {

  private readonly logger = new Logger(AuthGuard.name);
  constructor(private readonly authService: AuthService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();

    return this.authService.verifyAPIKey(request);
  }
}
