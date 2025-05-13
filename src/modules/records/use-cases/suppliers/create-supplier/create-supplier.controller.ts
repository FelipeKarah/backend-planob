import { Body, Controller, Post } from '@nestjs/common';
import { CreateSupplierService } from './create-supplier.service';
import { CreateSupplierDto } from 'src/modules/records/dto/suppliers/create-supplier.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class CreateSupplierController {
  constructor(private readonly createSupplierService: CreateSupplierService) {}

  @Post('/suppliers')
  @ApiTags('Records')
  handle(@Body() createSupplierDto: CreateSupplierDto) {
    return this.createSupplierService.execute(createSupplierDto);
  }
}
