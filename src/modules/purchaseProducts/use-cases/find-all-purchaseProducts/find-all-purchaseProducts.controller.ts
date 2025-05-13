import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/helpers/guards/jwt-auth.guard';
import { RolesGuard } from 'src/helpers/guards/roles.guard';
import { ApiTags } from '@nestjs/swagger';
import { FindAllPurchaseProductsService } from './find-all-purchaseProducts.service';

@Controller()
export class FindAllPurchaseProductsController {
  constructor(
    private readonly findAllPurchaseProductsService: FindAllPurchaseProductsService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiTags('PurchaseProducts')
  @Get('/purchases/products')
  handle() {
    return this.findAllPurchaseProductsService.execute();
  }
}
