import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindProductByIdService } from './find-product-by-id.service';

@Controller()
export class FindProductByIdController {
  constructor(
    private readonly findProductByIdService: FindProductByIdService,
  ) {}

  @Get('/products/:id')
  handle(@Param('id') id: string) {
    return this.findProductByIdService.execute(id);
  }
}
