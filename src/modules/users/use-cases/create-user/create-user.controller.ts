import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { CreateUserService } from './create-user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post('/users')
  @ApiTags('Users')
  handle(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.execute(createUserDto);
  }
}
