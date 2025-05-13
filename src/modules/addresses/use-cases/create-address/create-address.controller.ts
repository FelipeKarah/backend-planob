import { Body, Controller, Post } from '@nestjs/common';
import { CreateAddressDto } from '../../dto/create-address.dto';
import { CreateAddressService } from './create-address.service';

@Controller()
export class CreateAddressController {
  constructor(private readonly createAddressService: CreateAddressService) {}

  @Post('/addresses')
  handle(@Body() createAddressDto: CreateAddressDto) {
    return this.createAddressService.execute(createAddressDto);
  }
}
