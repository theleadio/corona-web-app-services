import { Test, TestingModule } from '@nestjs/testing';
import { UserV2Controller } from './user.controller';

describe('User Controller', () => {
  let controller: UserV2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserV2Controller],
    }).compile();

    controller = module.get<UserV2Controller>(UserV2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
