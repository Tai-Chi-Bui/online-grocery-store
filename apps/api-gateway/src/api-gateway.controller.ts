import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { LoginDto, LoginResponseDto } from '@app/shared/dto/auth.dto';
import { firstValueFrom } from 'rxjs';

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
  async login(@Body() loginData: LoginDto): Promise<LoginResponseDto> {
    return await firstValueFrom(this.authClient.send('auth.login', loginData));
  }
}