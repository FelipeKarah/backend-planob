import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindProductByPurchaseService } from './find-products-by-purchase.service';

@Controller()
export class FindProductByPurchaseController {
  constructor(
    private readonly findPurchaseProductByIdService: FindProductByPurchaseService,
  ) {}

  @Get('/purchases/products/:id')
  handle(@Param('id') idPurchase: string) {
    return this.findPurchaseProductByIdService.execute(idPurchase);
  }
}
