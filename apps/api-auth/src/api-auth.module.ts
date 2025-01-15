import { Module } from '@nestjs/common';
import { ApiAuthController } from './api-auth.controller';
import { ApiAuthService } from './api-auth.service';

@Module({
  imports: [],
  controllers: [ApiAuthController],
  providers: [ApiAuthService],
})
export class ApiAuthModule {}
