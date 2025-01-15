import { Test, TestingModule } from '@nestjs/testing';
import { ApiAuthController } from './api-auth.controller';
import { ApiAuthService } from './api-auth.service';

describe('ApiAuthController', () => {
  let apiAuthController: ApiAuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiAuthController],
      providers: [ApiAuthService],
    }).compile();

    apiAuthController = app.get<ApiAuthController>(ApiAuthController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiAuthController.getHello()).toBe('Hello World!');
    });
  });
});
