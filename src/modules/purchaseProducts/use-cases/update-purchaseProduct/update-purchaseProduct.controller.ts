import { UpdatePurchaseProductDto } from 'src/modules/purchaseProducts/dto/update-purchaseProduct.dto';
import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdatePurchaseProductService } from './update-purchaseProduct.service';

@Controller()
export class UpdatePurchaseProductController {
  constructor(
    private readonly updatePurchaseProductService: UpdatePurchaseProductService,
  ) {}

  @Put('/purchases/products/:id')
  handle(
    @Param('id') id: string,
    @Body() updatePurchaseProductDto: UpdatePurchaseProductDto,
  ) {
    return this.updatePurchaseProductService.execute(
      id,
      updatePurchaseProductDto,
    );
  }
}
