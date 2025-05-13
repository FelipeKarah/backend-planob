import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindSupplierByIdService } from './find-supplier-by-id.service';

@Controller()
export class FindSupplierByIdController {
  constructor(
    private readonly findSupplierByIdService: FindSupplierByIdService,
  ) {}

  @Get('/suppliers/:id')
  handle(@Param('id') id: string) {
    return this.findSupplierByIdService.execute(id);
  }
}
