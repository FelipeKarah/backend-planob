import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateSupplierService } from './update-supplier.service';
import { UpdateSupplierDto } from 'src/modules/records/dto/suppliers/update-supplier.dto';

@Controller()
export class UpdateSupplierController {
  constructor(private readonly updateSupplierService: UpdateSupplierService) {}

  @Put('/suppliers/:id')
  handle(
    @Param('id') id: string,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    return this.updateSupplierService.execute(id, updateSupplierDto);
  }
}
