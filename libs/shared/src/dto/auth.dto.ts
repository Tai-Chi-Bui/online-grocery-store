export class LoginDto {
  email: string;
  password: string;
}

export class LoginResponseDto {
  accessToken: string;
  user: {
    id: string;
    email: string;
  };
} 