import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindUserByEmailService } from './find-user-by-email.service';

@Controller()
export class FindUserByEmailController {
  constructor(
    private readonly findUserByEmailService: FindUserByEmailService,
  ) {}

  // @Get('/users/:email')
  // handle(@Param('email') email: string) {
  //   return this.findUserByEmailService.execute(email);
  // }
}
