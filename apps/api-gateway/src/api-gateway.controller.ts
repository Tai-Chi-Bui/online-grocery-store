import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('auth')
export class ApiGatewayController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.authClient.subscribeToResponseOf('auth.login');
    await this.authClient.connect();
  }

  @Post('login')
  async login(@Body() loginData: any) {
    return this.authClient.send('auth.login', loginData);
  }
}