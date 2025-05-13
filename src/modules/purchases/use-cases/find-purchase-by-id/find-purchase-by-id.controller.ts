import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindPurchaseByIdService } from './find-purchase-by-id.service';

@Controller()
export class FindPurchaseByIdController {
  constructor(
    private readonly findPurchaseByIdService: FindPurchaseByIdService,
  ) {}

  @Get('/purchases/:id')
  handle(@Param('id') id: string) {
    return this.findPurchaseByIdService.execute(id);
  }
}
