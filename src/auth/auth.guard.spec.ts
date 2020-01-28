import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ConfigService } from '../config/config.service';
import * as path from 'path';

describe('AuthGuard', () => {
  it('should be defined', () => {
    expect(new AuthGuard(new AuthService(new ConfigService(path.resolve('./', '.env', 'development.env'))))).toBeDefined();
  });
});
