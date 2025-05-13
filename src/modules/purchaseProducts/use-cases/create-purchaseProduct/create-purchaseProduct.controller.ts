import { Body, Controller, Post } from '@nestjs/common';
import { CreatePurchaseProductDto } from '../../dto/create-purchaseProduct.dto';
import { CreatePurchaseProductService } from './create-purchaseProduct.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class CreatePurchaseProductController {
  constructor(
    private readonly createPurchaseProductService: CreatePurchaseProductService,
  ) {}

  @Post('/purchases/products')
  @ApiTags('PurchaseProducts')
  handle(@Body() createPurchaseProductDto: CreatePurchaseProductDto) {
    return this.createPurchaseProductService.execute(createPurchaseProductDto);
  }
}
