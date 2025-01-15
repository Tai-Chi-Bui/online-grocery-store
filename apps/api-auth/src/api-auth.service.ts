import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiAuthService {
  getHello(): string {
    return 'Hello World!';
  }
}
