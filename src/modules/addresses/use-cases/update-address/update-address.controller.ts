import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateAddressDto } from '../../dto/update-address.dto';
import { UpdateAddressService } from './update-address.service';

@Controller()
export class UpdateAddressController {
  constructor(private readonly updateAddressService: UpdateAddressService) {}

  // @Put('/addresses/:id')
  // handle(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
  //   return this.updateAddressService.execute(id, updateAddressDto);
  // }
}
