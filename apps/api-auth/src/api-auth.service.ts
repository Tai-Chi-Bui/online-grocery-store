import { Injectable } from '@nestjs/common';
import { LoginDto, LoginResponseDto } from '@app/shared/dto/auth.dto';

@Injectable()
export class ApiAuthService {
  async login(data: LoginDto): Promise<LoginResponseDto> {
    // TODO: Implement actual authentication logic
    return {
      accessToken: 'mock_token',
      user: {
        id: '1',
        email: data.email,
      },
    };
  }
}
