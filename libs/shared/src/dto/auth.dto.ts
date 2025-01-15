/**
 * This file contains Data Transfer Objects (DTOs) for authentication-related operations
 * 
 * DTOs are used to define the shape of data being transferred between different parts of the application,
 * particularly for validation and type safety purposes.
 * 
 * The file includes:
 * - LoginDto: Validates login request payload with email and password
 * - LoginResponseDto: Defines the structure of successful login response with access token and user info
 */


/**
 * How to use this file:
 * 
 * 1. Import DTOs in your controllers/services:
 *    import { LoginDto, LoginResponseDto } from '@app/shared/dto/auth.dto';
 * 
 * 2. Use LoginDto for validating login requests:
 *    - In API Gateway controllers to validate incoming HTTP requests
 *    - In Auth microservice to validate message payloads
 *    Example:
 *    @Post('login')
 *    async login(@Body() loginDto: LoginDto)
 * 
 * 3. Use LoginResponseDto to type the login response:
 *    - In Auth service to structure the login response
 *    - In API Gateway to properly type the response to clients
 *    Example:
 *    async login(credentials: LoginDto): Promise<LoginResponseDto>
 * 
 * Key locations where these DTOs are used:
 * - apps/api-gateway/src/auth/auth.controller.ts
 * - apps/api-auth/src/api-auth.controller.ts
 * - apps/api-auth/src/api-auth.service.ts
 */



import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class LoginResponseDto {
  accessToken: string;
  user: {
    id: string;
    email: string;
  };
} 