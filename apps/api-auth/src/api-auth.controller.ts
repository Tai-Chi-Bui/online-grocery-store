import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ApiAuthService } from './api-auth.service';

@Controller()
export class ApiAuthController {
  constructor(private readonly apiAuthService: ApiAuthService) {}

  @MessagePattern('auth.login') // Kafka topic
  async login(@Payload() data: any) {
    return this.apiAuthService.login(data);
  }
}