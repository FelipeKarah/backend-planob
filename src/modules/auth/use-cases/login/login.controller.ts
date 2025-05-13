import { Controller, Post, Body, Request } from '@nestjs/common';
import { ApiCreatedResponse, ApiHeader, ApiOkResponse, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginAuthDto } from '../../dto/login-auth.dto';
import { LoginService } from './login.service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post("auth/login")
  @ApiTags("Auth")
  handle(@Body() loginAuthDto: LoginAuthDto) {
    return this.loginService.execute(loginAuthDto);
  }
}
