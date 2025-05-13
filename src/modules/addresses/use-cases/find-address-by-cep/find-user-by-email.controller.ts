import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindAddressByEmailService } from './find-user-by-email.service';

@Controller()
export class FindAddressByEmailController {
  constructor(
    private readonly findAddressByEmailService: FindAddressByEmailService,
  ) {}

  // @Get('/addresses/:email')
  // handle(@Param('email') email: string) {
  //   return this.findAddressByEmailService.execute(email);
  // }
}
